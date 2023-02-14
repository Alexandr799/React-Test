import { useState } from 'react';
import css from './LikeButton.module.css';
import LikeYes from '../../Icons/LikeYes';
import LikeNo from '../../Icons/LikeNo';

interface ILike {
	liked: boolean;
	className?: string;
	callback?: () => void;
}

const LikeButton = ({ liked, className, callback }: ILike) => {
	const [isLiked, setLiked] = useState(liked);
	const classButton = className ? `${className} ${css.button}` : css.button;
	return (
		<button
			className={classButton}
			onClick={() => {
				if (callback) {
					callback();
				}
				setLiked(!isLiked);
			}}>
			{isLiked ? <LikeYes /> : <LikeNo />}
		</button>
	);
};

export default LikeButton;
