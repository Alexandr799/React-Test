import css from './ButtonSecondary.module.css';

interface IButtonSecondary {
	action?: () => void;
	text: string;
	As: 'a' | 'button' | 'div';
	href?: string;
	dopClass?: string;
}

const ButtonSecondary = ({ action, text, As, href, dopClass }: IButtonSecondary) => {
	const className = dopClass ? `${css.button} ${dopClass}` : css.button;
	return (
		<As href={href} onClick={action} className={className}>
			{text}
		</As>
	);
};

export default ButtonSecondary;
