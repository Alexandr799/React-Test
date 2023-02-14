import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeaderContainer from '../HeaderContainer';
import css from './HeaderUserPage.module.css';
import Loader from '../../Loader';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../redux/store';
import { IUserState } from '../../../redux/reducer/userReducer';
import getUserById from '../../../redux/actionCompinate/getUserById';
import useDocumentTitle from '../../../hooks/useDocumentTitle';

const HeaderUserPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const {
		loading,
		error,
		userData: {
			userInfo: { first_name, last_name, avatar },
		},
	} = useSelector<IRootState, IUserState>((state) => state.user);
	const userName = first_name && last_name ? `${first_name} ${last_name}` : 'Пользователь';
	useDocumentTitle(userName);
	useEffect(() => {
		getUserById(id ? parseInt(id) : 1, dispatch);
	}, []);
	return (
		<HeaderContainer backButtonRender={true} className={css.header}>
			{loading && <Loader isLocal={true} />}
			{!error && (
				<div className={css.userBlock}>
					<img src={avatar} alt="" className={css.avatar}/>
					<div className={css.userInfo}>
						<h1 className={css.userName}>{userName}</h1>
						<h2 className={css.describe}>Партнер</h2>
					</div>
				</div>
			)}
		</HeaderContainer>
	);
};

export default HeaderUserPage;
