import css from './UserListSection.module.css';
import useFetch from '../../../hooks/useFetch';
import apiRequester from '../../../utils/Api/postService';
import { useEffect, useState } from 'react';
import { IUser } from '../../../utils/typeGuards/isUserList';
import Loader from '../../Loader';
import { isValidInfoAboutUsers } from '../../../utils/typeGuards/isValidInfoAboutUsers';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import Pagination from '../../Pagination/Pagination';
import LikeButton from '../../Buttons/LikeButton';

const UserListSection = () => {
	const [searchParams] = useSearchParams();
	const [countPagination, setCountPagination] = useState<number | false>(false);
	let currentPage = searchParams.get('page');
	currentPage = typeof currentPage === 'string' ? currentPage : '1';
	const [userList, setUserList] = useState<IUser[]>([]);
	const navigate = useNavigate();
	const [fetchReq, isLoading, error] = useFetch(async () => {
		const users = await apiRequester.getUsers(currentPage);
		if (!isValidInfoAboutUsers(users.data)) {
			throw new Error('Что то пошло не так, попробуйте зайти позже!');
		}
		if (users.data.data.length === 0) {
			throw new Error('Кажется такой страницы не существует!');
		}
		setCountPagination(users.data.total_pages);
		setUserList(users.data.data);
	});

	useEffect(() => {
		fetchReq();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage]);
	return (
		<section>
			<div className={`container ${css.container}`}>
				{isLoading && <Loader />}
				{error && (
					<div className={css.errorContent}>
						<p className={css.error}>{error.message}</p>
						<Link to={'/team'} className={css.errorExit}>
							Вернуться на главную
						</Link>
					</div>
				)}
				{!error &&
					userList.map((user) => (
						<div key={user.id}>
							<article className={css.card}>
								<Link to={`/user/${user.id}`} className={css.userLink}></Link>
								<img src={user.avatar} alt="Фото члена команды" className={css.avatar} />
								<h3 className={css.name}>{`${user.first_name} ${user.last_name}`}</h3>
								<LikeButton
									liked={localStorage.getItem(`${user.id}`) === 'like'}
									callback={() => {
										if (localStorage.getItem(`${user.id}`) === 'like') {
											localStorage.removeItem(`${user.id}`);
										} else {
											localStorage.setItem(`${user.id}`, 'like');
										}
									}}
									className={css.like}
								/>
							</article>
						</div>
					))}
			</div>
			{countPagination && (
				<div className={css.paginationWrapper}>
					<Pagination
						callbackNavigate={(nextSelectedPage: number) => navigate(`/team?page=${nextSelectedPage + 1}`)}
						countPagination={countPagination}
						currentPage={parseInt(currentPage) ? parseInt(currentPage) - 1 : 0}
					/>
				</div>
			)}
		</section>
	);
};

export default UserListSection;
