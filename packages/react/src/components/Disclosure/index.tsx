import React from 'react';
import classNames from 'classnames';
import { hasTransition } from '../../utilities';
import { canUseDOM } from '../../utilities/environment';
import { BaseDetails, BaseDetailsProps } from '../BaseDetails';
import { BaseSummary } from '../BaseSummary';
import {
	Icon, IconVariant, SVGIcon, IconProps,
} from '../Icon';

type LifecycleCallback = () => boolean | void | Promise<boolean | void>;

const proceed = async (cb?: LifecycleCallback): Promise<boolean> => {
	if (cb) {
		return (await cb()) !== false;
	}
	return true;
};

const getDimension = (
	dim: 'height' | 'width',
	el: HTMLElement | null,
): number | undefined => {
	if (!el || !canUseDOM) return undefined;
	const prop = (dim === 'width') ? 'offsetWidth' : 'offsetHeight';
	return el[prop];
};

export interface DisclosureProps extends Omit<BaseDetailsProps, 'open'> {
	/** The content for the summary element generated by the disclosure component. */
	summary: string;
	/**
	 * The marker icon that indicates the disclosure's current state. Similar to the
	 * [CSS `::marker`](https://developer.mozilla.org/en-US/docs/Web/CSS/%3A%3Amarker).
	 * The default is `caret-right`. When `panel` is `true`, the default is
	 * `chevron-down`.
	 */
	marker?: IconVariant | SVGIcon | null | ((panel?: boolean) => IconVariant | SVGIcon | null);
	/** The position of the marker. `right` when `panel={true}` and `left` otherwise. */
	markerPosition?: 'left' | 'right' | null | ((panel?: boolean) => 'left' | 'right' | null);
	/** How the marker should move when it opens. Default is `"rotate-90"`. */
	markerTransform?: 'rotate-90' | 'flip-3d' | 'none';
	/** Used to set the initial open state or fully control it. */
	isOpen?: boolean;
	/**
	 * Indicates that the disclosure should be in "panel" mode, which has a few
	 * effects:
	 *
	 * - The default `marker` will be `chevron-down`
	 * - The default `markerPosition` will be `right`
	 * - The default `markerTransform` will be `flip-3d`
	 * - The disclosure will be given the `nds-disclosure--panel` modifier class
	 */
	panel?: boolean;
	/** Indicates that animations should be disabled. */
	reducedMotion?: boolean;
	/** The base `className` according to BEM conventions. */
	baseName?: string;
	/** The `className` that will be applied to the `<summary>`. */
	summaryClass?: string;
	/** The `className` for the outer contents `<div>`. */
	contentsOuterClass?: string;
	/** The `className` that will be applied to the inner contents `<div>`. */
	contentsInnerClass?: string;
	/**
	 * The `className` that will be applied to the summary's icon indicator,
	 * which takes the place of the native `summary::marker` pseudo element.
	 */
	markerClass?: string;
	/**
	 * Lifecycle method that is triggered when the disclosure begins to close.
	 * Returning `false` will prevent the disclosure from beginning to close.
	 */
	onCloseStart?: LifecycleCallback;
	/**
	 * Lifecycle method that is triggered when the user clicks on the disclosure
	 * as it's closing. Returning `false` will cause the disclosure to continue
	 * closing.
	 */
	onCloseCancel?: LifecycleCallback;
	/**
	 * Lifecycle method that is triggered when the disclosure has finished closing.
	 */
	onCloseEnd?: LifecycleCallback;
	/**
	 * Lifecycle method that is triggered when the disclosure begins to open.
	 * Returning `false` will prevent the disclosure from beginning to open.
	 */
	onOpenStart?: LifecycleCallback;
	/**
	 * Lifecycle method that is triggered when the user clicks on the disclosure
	 * as it's opening. Returning `false` will cause the disclosure to continue
	 * opening.
	 */
	onOpenCancel?: LifecycleCallback;
	/**
	 * Lifecycle method that is triggered when the disclosure has finished opening.
	 */
	onOpenEnd?: LifecycleCallback;
}

export const Disclosure = React.forwardRef<HTMLDetailsElement, DisclosureProps>((
	{
		isOpen: propOpen = false,
		reducedMotion,
		summary,
		children,
		marker = (p) => {
			if (p) return 'chevron-down';
			return 'caret-right';
		},
		markerPosition = (p) => {
			if (p) return 'right';
			return 'left';
		},
		markerTransform,
		panel,

		className,
		baseName = 'nds-disclosure',
		summaryClass = `${baseName}__summary`,
		markerClass = `${baseName}__marker`,
		contentsOuterClass = `${baseName}__contents-outer`,
		contentsInnerClass = `${baseName}__contents-inner`,

		onCloseStart,
		onCloseCancel,
		onCloseEnd,
		onOpenStart,
		onOpenCancel,
		onOpenEnd,
		...attributes
	}: DisclosureProps, ref,
): JSX.Element => {
	const [isOpen, setOpen] = React.useState(propOpen);
	const [height, setHeight] = React.useState<number>();
	const [state, setState] = React.useState<'opening' | 'closing'>();
	const [style, setStyle] = React.useState<React.CSSProperties>();
	const [contents, setContents] = React.useState<HTMLDivElement | null>(null);
	const transform = React.useMemo<typeof markerTransform>(() => {
		if (markerTransform) return markerTransform;
		return (panel) ? 'flip-3d' : 'rotate-90';
	}, [markerTransform, panel]);

	const shouldAnimate = React.useMemo(() => {
		if (reducedMotion) return false;
		if (!contents) return true;
		return hasTransition(contents);
	}, [reducedMotion, contents]);

	const open = React.useCallback(async () => {
		if (isOpen || state === 'opening') return;
		if (state === 'closing') {
			if (await proceed(onCloseCancel)) {
				setState((shouldAnimate) ? 'opening' : undefined);
			}
		} else if (await proceed(onOpenStart)) {
			setOpen(true);
		}
	}, [isOpen, state, shouldAnimate, onCloseCancel, onOpenStart]);

	const close = React.useCallback(async () => {
		if (!isOpen || state === 'closing') return;
		if (state === 'opening') {
			if (await proceed(onOpenCancel)) {
				setState((shouldAnimate) ? 'closing' : undefined);
			}
		} else if (await proceed(onCloseStart)) {
			if (shouldAnimate) {
				setStyle({ height });
				window.requestAnimationFrame(() => {
					setState('closing');
				});
			} else {
				setOpen(false);
			}
		}
	}, [isOpen, state, height, shouldAnimate, onOpenCancel, onCloseStart]);

	const summaryClickHandler = (e: React.MouseEvent<HTMLElement>): void => {
		e.preventDefault();
		if (isOpen) close();
		else open();
	};

	const transitionEndHandler = (): void => {
		setState(undefined);
		setStyle(undefined);

		if (state === 'opening') {
			if (onOpenEnd) onOpenEnd();
		}
		if (state === 'closing') {
			setOpen(false);
			if (onCloseEnd) onCloseEnd();
		}
	};

	// control via `isOpen` prop
	React.useEffect(() => {
		if (propOpen) open();
		else close();
	}, [propOpen]);	// eslint-disable-line react-hooks/exhaustive-deps

	// open start effect: discover height, set height to 0, then trigger 'opening'
	React.useLayoutEffect(() => {
		if (!isOpen) setState(undefined);
		if (isOpen && contents) {
			setHeight(getDimension('height', contents));
			if (shouldAnimate) {
				setStyle({ height: 0 });
				window.requestAnimationFrame(() => {
					setState('opening');
				});
			}
		}
	}, [isOpen, contents, shouldAnimate]);

	// set the style height when opening/closing
	React.useEffect(() => {
		if (shouldAnimate) {
			if (state === 'opening' && height) {
				setStyle({ height });
			}
			if (state === 'closing') {
				setStyle({ height: 0 });
			}
		} else {
			setStyle(undefined);
		}
	}, [state, height, shouldAnimate]);

	const getMarkerIcon = React.useCallback((
		m: typeof marker,
	): Pick<IconProps, 'variant' | 'icon'> | undefined => {
		if (!m) return undefined;
		if (typeof m === 'string') return { variant: m };
		if (typeof m === 'function') return getMarkerIcon(m(panel));
		return { icon: m };
	}, [panel]);

	const Marker = React.useMemo(() => {
		if (!marker) return undefined;
		const iconProps = getMarkerIcon(marker);
		return (
			<span className={markerClass}>
				<Icon
					{...iconProps}
					data-transform={transform}
				/>
			</span>
		);
	}, [marker, markerClass, transform, getMarkerIcon]);

	const markerPos = React.useMemo(() => {
		if (!markerPosition) return undefined;
		if (typeof markerPosition === 'function') {
			return markerPosition(panel) || undefined;
		}
		return markerPosition;
	}, [markerPosition, panel]);

	const classes = classNames(
		className,
		baseName,
		state && `nds-${state}`,
		{
			[`${baseName}--panel`]: panel,
			'nds-reduced-motion': !shouldAnimate,
		},
	);

	return (
		<BaseDetails ref={ref} className={classes} open={isOpen} {...attributes}>
			<BaseSummary
				className={summaryClass}
				marker={Marker}
				onClick={summaryClickHandler}
				markerPosition={markerPos}
			>
				<div className={`${baseName}__title`}>{ summary }</div>
			</BaseSummary>
			{ isOpen && (
				<div
					style={style}
					className={contentsOuterClass}
					ref={setContents}
					onTransitionEnd={transitionEndHandler}
				>
					<div className={contentsInnerClass}>{ children }</div>
				</div>
			) }
		</BaseDetails>
	);
});
