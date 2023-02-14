import * as React from 'react';
import css from './PrimaryButton.module.css';

interface IPrimary {
	text: string;
	handler?: () => void;
	As: 'a' | 'button' | 'div';
	href?: string;
	dopClass?: string;
}

const Primarybutton = ({ text, handler, dopClass, As, href }: IPrimary) => {
	const className = dopClass ? `${css.button} ${dopClass}` : css.button;
	return (
		<As href={href} className={className} onClick={handler}>
			{text}
		</As>
	);
};

export default Primarybutton;
