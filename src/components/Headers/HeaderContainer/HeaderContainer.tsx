import * as React from 'react';
import ButtonSecondary from '../../Buttons/ButtonSecondary';
import { Link } from 'react-router-dom';
import css from './HeaderContainer.module.css';
import { useDispatch } from 'react-redux';
import { meReqDefault } from '../../../redux/actions/meActions/meReqDefault';
import Exit from '../../Icons/Exit';
import Back from '../../Icons/Back';

interface IHeaderContainer {
	backButtonRender?: boolean;
	children?: React.ReactNode;
	className: string;
}

const HeaderContainer = ({ children, backButtonRender, className }: IHeaderContainer) => {
	const dispatch = useDispatch();
	const exitFunc = () => {
		localStorage.removeItem('token');
		dispatch(meReqDefault());
	};
	return (
		<header className={css.header}>
			<div className={`container ${css.headerContainer} ${className}`}>
				<ButtonSecondary As={'button'} text={'Выйти'} dopClass={css.exit} action={exitFunc} />
				<button onClick={exitFunc} className={css.exitMobile}>
					<Exit />
				</button>
				{backButtonRender && (
					<Link to={'/'}>
						<ButtonSecondary As={'div'} text={'Назад'} dopClass={css.back} />
						<div className={css.backMobile}>
							<Back />
						</div>
					</Link>
				)}
				{children}
			</div>
		</header>
	);
};

export default HeaderContainer;
