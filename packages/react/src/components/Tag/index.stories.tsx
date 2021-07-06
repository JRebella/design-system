import React from 'react';
import {
	withKnobs,
	boolean,
	select,
	text,
} from '@storybook/addon-knobs';
import { Tag } from '.';
import { IconOptions } from '../Icon';
import { Link } from '../Link';
import { ColorOptions } from '../../utilities/color';

export default {
	title: 'Tag',
	component: Tag,
	decorators: [withKnobs],
};

export const Default: React.FunctionComponent = () => (
	<Tag
		dismissible={boolean('dismissible', false)}
		icon={select('Icon', { None: undefined, ...IconOptions }, null)}
		color={select('Color', { None: undefined, ...ColorOptions }, undefined)}
	>
		{text('Label', 'Tag Label')}
	</Tag>
);

export const MultipleTags: React.FunctionComponent = () => (
	<>
		<Tag color="blue" style={{ marginRight: 4 }}>
			Default Tag
		</Tag>
		<Tag color="green" icon="save" style={{ marginRight: 4 }}>
			With Icon
		</Tag>
		<Tag dismissible color="red" style={{ marginRight: 4 }}>
			Dismissible
		</Tag>
	</>
);
export const WithLink: React.FunctionComponent = () => (
	<>
		<Tag>
			<Link href="https://github.com/wwnorton/design-system" external>Norton Design System GitHub</Link>
		</Tag>
	</>
);
