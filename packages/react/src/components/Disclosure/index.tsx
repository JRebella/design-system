import React from 'react';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import BaseDetails, { BaseDetailsProps } from '../BaseDetails';
import BaseSummary from '../BaseSummary';
import Icon from '../Icon';
import { isElement, hasTransition } from '../../utilities/helpers';

export type DisclosureVariant = 'default' | 'panel';
export type DisclosureAnatomy = 'summary' | 'marker' | 'contentsInner' | 'contentsOuter';
export type DisclosureLifecycleState = 'open' | 'closed' | 'opening' | 'closing';
export type DisclosureLifecycleMethod = 'onCloseStart' | 'onCloseCancel' | 'onCloseEnd' | 'onOpenStart' | 'onOpenCancel' | 'onOpenEnd';
export interface DisclosureState {
	lifecycle: DisclosureLifecycleState;
	height?: number;
}

export interface DisclosureProps extends BaseDetailsProps {
	/** The content for the summary element generated by the disclosure component. */
	summary: string;
	/** The base `className` according to BEM conventions. */
	baseName?: string;
	/** The `className` that will be applied to the `<summary>`. */
	summaryClass?: string;
	/** The `className` for the outer contents `<div>`. */
	contentsOuterClass?: string;
	/** The `className` that will be applied to the inner contents `<div>`. */
	contentsInnerClass?: string;
	/** A class that will be applied to the outer contents `<div>` while opening. */
	closingClass?: string;
	/** A class that will be applied to the outer contents `<div>` while closing. */
	openingClass?: string;
	/**
	 * The `className` that will be applied to the summary's icon indicator,
	 * which takes the place of the native `summary::marker` pseudo element.
	 */
	markerClass?: string;
	/** Whether resizing the window should trigger a height calculation update. */
	updateOnResize?: boolean;
	/** The variant for the disclosure. */
	variant?: DisclosureVariant;
	/** Whether to animate the opening/closing of the disclosure. */
	animate?: boolean;
	/** A reference to the inner <details> element. */
	detailsRef?: React.RefObject<HTMLDetailsElement>;
	/** Lifecycle method that is triggered when the disclosure begins to close. */
	onCloseStart?: () => void;
	/** Lifecycle method that is triggered when the user clicks on the disclosure as it's closing. */
	onCloseCancel?: () => void;
	/** Lifecycle method that is triggered when the disclosure has finished closing. */
	onCloseEnd?: () => void;
	/** Lifecycle method that is triggered when the disclosure begins to open. */
	onOpenStart?: () => void;
	/** Lifecycle method that is triggered when the user clicks on the disclosure as it's opening. */
	onOpenCancel?: () => void;
	/** Lifecycle method that is triggered when the disclosure has finished opening. */
	onOpenEnd?: () => void;
}

export default class Disclosure extends React.Component<DisclosureProps, DisclosureState> {
	/**
	 * The time in milliseconds to delay when recalculating the contents height
	 * due to a window resize. Only applies if `updateOnResize` is `true`.
	*/
	public static RESIZE_DEBOUNCE_DELAY = 150;
	public static bemBase = 'disclosure';
	public static bemElements: Record<DisclosureAnatomy, string> = {
		summary: 'summary',
		marker: 'marker',
		contentsInner: 'contents-inner',
		contentsOuter: 'contents-outer',
	}

	public detailsRef: React.RefObject<HTMLDetailsElement>;
	public contentsHeight = 0;
	public contentsOuter: HTMLDivElement | null = null;

	public static defaultProps = {
		baseName: Disclosure.bemBase,
		animate: true,
		open: false,
		updateOnResize: true,
	}

	constructor(props: DisclosureProps) {
		super(props);
		this.state = {
			lifecycle: props.open ? 'open' : 'closed',
		};
		this.detailsRef = props.detailsRef || React.createRef<HTMLDetailsElement>();
	}

	componentDidMount(): void {
		const { animate } = this.props;
		if (animate) {
			this.initialize();
		}
	}

	componentDidUpdate(prevProps: DisclosureProps, prevState: DisclosureState): void {
		const {
			open,
			animate,
			detailsRef,
		} = this.props;
		const { lifecycle } = this.state;
		if (detailsRef && detailsRef !== prevProps.detailsRef) {
			this.detailsRef = detailsRef;
		}
		if (lifecycle !== prevState.lifecycle) {
			switch (`${prevState.lifecycle} -> ${lifecycle}`) {
				case 'open -> closing':
					this.closeStart();
					break;
				case 'closing -> opening':
					this.closeCancel();
					break;
				case 'closing -> closed':
					this.closeEnd();
					break;
				case 'closed -> opening':
					this.openStart();
					break;
				case 'opening -> closing':
					this.openCancel();
					break;
				case 'opening -> open':
					this.openEnd();
					break;
				case 'open -> closed':
					this.closeEnd();
					break;
				case 'closed -> open':
					this.openEnd();
					break;
				default:
			}
		}
		if (prevProps.open && !open) {
			this.close();
		} else if (!prevProps.open && open) {
			this.open();
		}
		if (prevProps.animate && !animate) {
			this.reset();
		} else if (!prevProps.animate && animate) {
			this.initialize();
		}
	}

	private onWindowresize = debounce(() => {
		const { lifecycle } = this.state;
		this.removeHeight();
		this.contentsHeight = this.findHeight();
		if (lifecycle === 'opening' || lifecycle === 'open') {
			this.setState({ height: this.contentsHeight });
		}
		if (lifecycle === 'closing' || lifecycle === 'closed') {
			this.setState({ height: 0 });
		}
	}, Disclosure.RESIZE_DEBOUNCE_DELAY)

	/**
	 * The `<summary>` click handler.
	 *
	 * As soon as a `<details>` element no longer has the `open` attribute,
	 * its inner contents disappear. To prevent this, we transition the height
	 * of the contents via its outer container, delaying the removal of the
	 * `open` attribute until the `transitionend` event triggers.
	 */
	private onSummaryClick = (e: React.MouseEvent<HTMLElement>): void => {
		e.preventDefault();
		const { lifecycle } = this.state;
		if (this.shouldAnimate) {
			switch (lifecycle) {
				case 'opening':
				case 'open':
					this.setState({ lifecycle: 'closing' });
					break;
				case 'closing':
				case 'closed':
					this.setState({ lifecycle: 'opening' });
					break;
				default:
			}
		} else {
			const nextLifecycle = (lifecycle === 'open') ? 'closed' : 'open';
			this.setState({ lifecycle: nextLifecycle });
		}
	}

	// The transition begins with the summary click. On end, update the state if it's closed.
	private onTransitionend = (): void => {
		const { lifecycle } = this.state;
		if (lifecycle === 'opening') {
			this.setState({ lifecycle: 'open' });
		} else if (lifecycle === 'closing') {
			this.setState({ lifecycle: 'closed' });
		}
	}

	private get isOpen(): boolean {
		const { lifecycle } = this.state;
		return lifecycle !== 'closed';
	}

	private get shouldAnimate(): boolean {
		const { animate = Disclosure.defaultProps.animate } = this.props;
		return animate && hasTransition(this.contentsOuter);
	}

	private get Summary(): JSX.Element {
		const {
			baseName,
			summary,
			variant,
			summaryClass = `${baseName}__${Disclosure.bemElements.summary}`,
			markerClass = `${baseName}__${Disclosure.bemElements.marker}`,
		} = this.props;
		if (isElement(summary, 'summary')) return summary;
		const markerType = (variant === 'panel') ? 'chevron-down' : 'caret-right';
		const markerElement = <Icon variant={markerType} className={markerClass} />;
		const markerPosition = variant === 'panel' ? 'right' : 'left';
		return (
			<BaseSummary
				className={summaryClass}
				marker={markerElement}
				onClick={this.onSummaryClick}
				markerPosition={markerPosition}
			>
				{summary}
			</BaseSummary>
		);
	}

	private closeStart(): void {
		this.setState({ height: 0 }, () => {
			this.callLifecycleMethod('onCloseStart');
		});
	}

	private closeCancel(): void {
		this.setState({ height: this.contentsHeight }, () => {
			this.callLifecycleMethod('onCloseCancel');
		});
	}

	private closeEnd(): void {
		this.callLifecycleMethod('onCloseEnd');
	}

	private openStart(): void {
		this.setState({ height: this.contentsHeight }, () => {
			this.callLifecycleMethod('onOpenStart');
		});
	}

	private openCancel(): void {
		this.setState({ height: 0 }, () => {
			this.callLifecycleMethod('onOpenCancel');
		});
	}

	private openEnd(): void {
		this.callLifecycleMethod('onOpenEnd');
	}

	private open(): void {
		this.setState({ lifecycle: (this.shouldAnimate) ? 'opening' : 'open' });
	}

	private close(): void {
		this.setState({ lifecycle: (this.shouldAnimate) ? 'closing' : 'closed' });
	}

	private findHeight(): number {
		const { current: detailsRef } = this.detailsRef;
		if (detailsRef && this.contentsOuter) {
			if (!this.isOpen) detailsRef.setAttribute('open', 'open');
			const { clientHeight } = this.contentsOuter;
			if (!this.isOpen) detailsRef.removeAttribute('open');
			return clientHeight;
		}
		return 0;
	}

	private initialize(): void {
		const { lifecycle } = this.state;
		const { updateOnResize } = this.props;
		this.contentsHeight = this.findHeight();

		if (this.shouldAnimate) {
			this.setState({ height: (lifecycle === 'open') ? this.contentsHeight : 0 });
			if (updateOnResize) {
				window.addEventListener('resize', this.onWindowresize);
			}
		}
	}

	private reset(): void {
		const { updateOnResize } = this.props;
		this.removeHeight();
		if (updateOnResize) {
			window.removeEventListener('resize', this.onWindowresize);
		}
	}

	private removeHeight(): void {
		if (this.contentsOuter) {
			this.setState({ height: undefined });
		}
	}

	private callLifecycleMethod(name: DisclosureLifecycleMethod): void {
		const { [name]: method } = this.props;
		if (method) method();
	}

	render(): JSX.Element {
		const {
			// classes
			className, baseName,
			contentsInnerClass = `${baseName}__${Disclosure.bemElements.contentsInner}`,
			contentsOuterClass = `${baseName}__${Disclosure.bemElements.contentsOuter}`,
			// options
			variant, animate,
			// elements
			children,
			// props that are used elsewhere
			/* eslint-disable @typescript-eslint/no-unused-vars */
			onCloseStart, onCloseCancel, onCloseEnd,
			onOpenStart, onOpenCancel, onOpenEnd,
			detailsRef, summary, summaryClass, updateOnResize, open: propsOpen,
			/* eslint-enable */
			// everything inherited by ReactAttributes & HTML
			...attributes
		} = this.props;
		const { height, lifecycle } = this.state;
		const classes = classNames({
			[`${baseName}`]: true,
			[`${baseName}--panel`]: variant === 'panel',
			'reduced-motion': !animate,
			[`${lifecycle}`]: true,
		}, className);

		return (
			<BaseDetails
				ref={this.detailsRef}
				className={classes}
				// The open attribute should be applied on all states, except closing.
				// Otherwise, the animation won't work.
				open={this.isOpen}
				{...attributes}
			>
				{ this.Summary }
				<div
					style={{ height }}
					className={contentsOuterClass}
					ref={(el): void => { this.contentsOuter = el; }}
					onTransitionEnd={this.onTransitionend}
				>
					<div className={contentsInnerClass}>
						{children}
					</div>
				</div>
			</BaseDetails>
		);
	}
}
