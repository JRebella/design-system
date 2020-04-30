import React from 'react';
import { action } from '@storybook/addon-actions';
import {
	withKnobs,
	boolean,
	text,
} from '@storybook/addon-knobs';
import './index.stories.scss';
import Radio, { RadioProps } from '.';

export default {
	title: 'Radio',
	component: Radio,
	decorators: [withKnobs],
};

export const Default: React.FunctionComponent = () => (
	<Radio
		label={text('Label', 'Radio')}
		help={text('Help', 'Additional information about this radio.')}
		disabled={boolean('Disabled', false)}
		onChange={action('onChange')}
	/>
);

export const WithThumbnail: React.FunctionComponent = () => (
	<Radio
		label={text('Label', 'Radio')}
		help={text('Help', 'Additional information about this radio.')}
		disabled={boolean('Disabled', false)}
		onChange={action('onChange')}
		thumbnail={<img src={text('Thumbnail Source', 'https://picsum.photos/64')} alt="" />}
	/>
);

interface FieldsetProps { prompt: string; items: string[]; name: string }

export const Fieldset: React.FunctionComponent<FieldsetProps> = ({
	prompt = 'Choose a fruit',
	items = ['Apple', 'Banana', 'Kiwi', 'Orange'],
	name = 'fruit',
}: FieldsetProps): JSX.Element => {
	const [checked, setChecked] = React.useState<string>();
	const updateChecked = (item: string): RadioProps['onChange'] => (e): void => {
		setChecked(item);
		action('onChange')(e);
	};
	return (
		<fieldset>
			<legend>{ prompt }</legend>
			{ items.map((item) => (
				<Radio
					key={item}
					label={item}
					value={item}
					name={name}
					onChange={updateChecked(item)}
					checked={checked === item}
					className="group-item"
				/>
			)) }
		</fieldset>
	);
};
