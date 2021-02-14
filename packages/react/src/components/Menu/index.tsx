import React, { useState } from 'react';
import { prefix } from '../../config';
import { BasePopper, BasePopperProps } from '../BasePopper';
import {
	BaseMenu,
	BaseMenuProps,
} from '../BaseMenu';
import {
	MenuItemProps,
	MenuItem,
} from './MenuItem';

import {
	MenuDivider,
} from './MenuDivider';

import { useForwardedRef, usePopperTriggers } from '../../hooks';

export type Triggers =
	| 'click'
	| 'focus'
	| 'focusin'
	| 'manual'
	| 'mouseenter'
	| 'pointerenter'
export interface menuItemJsonStructure extends MenuItemProps{
	menuDivider?:boolean;
}
export interface MenuJsonData {
	menuItems:menuItemJsonStructure[]
}
export interface MenuProps extends BasePopperProps, BaseMenuProps {
	/** The base class name according to BEM conventions. Default is "menu". */
	baseName?:string;
	/** Generate menu dynamically as per the JSON */
	/** JSON format should be {
		// menuItems: [{
		// 	label: 'Overview',
		// 	description: 'Overview menu',
		// },
		// {
		//  ...
		// }
	// } */
	JsonMenu?:MenuJsonData;
	/** Menu only expect Menuitem, MenuDivider, MenuGroup and MenuHeader element */
	children?: React.ReactChild[];
	/**
	 * A string of space-separated triggers. Options include `click`, `focus`,
	 * `focusin`, `mouseenter`, `pointerenter`, and `manual`. When `manual` is
	 * included anywhere in the string, the menu's visibility must be
	 * controlled via `isOpen`. Default is `"click"`.
	 */
	trigger?: string;
	id?:string;
}

export const Menu = React.forwardRef<HTMLUListElement, MenuProps>((
	{
		baseName = prefix('menu'),
		children,
		isOpen = false,
		placement = 'bottom-start',
		reference,
		id = 'menu',
		trigger = 'click',
		JsonMenu,
		...props
	}: MenuProps, ref,
) => {
	const [ariaLabel, setAriaLabel] = useState('');
	const [popper, setPopper] = useForwardedRef(ref);
	const open = usePopperTriggers({
		reference, popper, trigger, isOpen,
	});

	const JsonMenuData = React.useMemo(() => {
		if (!JsonMenu) return null;
		return JsonMenu.menuItems.map((item) => {
			if (item && !item.menuDivider) {
				return (
					<MenuItem
						{...item}
					/>
				);
			}
			return <MenuDivider />;
		});
	}, [JsonMenu]);

	React.useEffect(() => {
		if (ariaLabel && reference && reference instanceof HTMLElement) {
			setAriaLabel(reference.innerText);
		}
	}, [ariaLabel, reference]);
	return (
		<BasePopper
			aria-hidden={!open}
			role="menu"
			className={baseName}
			tagName="ul"
			placement={placement}
			reference={reference}
			isOpen={open}
			aria-label={ariaLabel}
			trigger='manual'
			aria-orientation="vertical"
			id={id}
			ref={setPopper}
			{...props}
		>
			<BaseMenu
				baseName={baseName}
				{...props}
			>
				{children || JsonMenuData}
			</BaseMenu>
		</BasePopper>
	);
});
