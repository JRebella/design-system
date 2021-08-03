import React from 'react';

export interface BaseSummaryProps extends React.HTMLAttributes<HTMLElement> {
	/**
	 * A marker or icon that indicates the summary's state or action, typically
	 * a caret or chevron.
	 */
	marker?: JSX.Element;
	/** The marker's position relative to the summary's text. */
	markerPosition?: 'left' | 'right';
}

export const BaseSummary = React.forwardRef<HTMLElement, BaseSummaryProps>(({
	marker,
	markerPosition = 'left',
	children,
	...attributes
}: BaseSummaryProps, ref) => (
	<summary ref={ref}>
		<div {...attributes}>
			{ markerPosition === 'left' && marker }
			{ children }
			{ markerPosition === 'right' && marker }
		</div>
	</summary>
));
