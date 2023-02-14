import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import * as React from 'react';
import AuthForm from '../Forms/AuthForm';
import RegisterForm from '../Forms/RegisterForm';
import AuthPageContainer from '../Pages/AuthPage';
import { useSelector } from 'react-redux';
import { IRootState } from '../../redux/store';
import MainPage from '../Pages/MainPage';
import PersonPage from '../Pages/PersonPage';
import Page404 from '../Pages/Page404';

const AppRouter = () => {
	const isAuth = useSelector<IRootState, string | null>((state) => state.me.token);
	return (
		<BrowserRouter>
			{isAuth === null ? (
				<Routes>
					<Route path={'/team'} element={<Navigate to="/" replace />} />
                    <Route path={'/user/:id'} element={<Navigate to="/" replace />} />
					<Route
						path="/"
						element={
							<AuthPageContainer
								title="Войти в приложение"
								linkText="У вас нет аккаунта? Зарегистрируйтесь!"
								AuthForm={AuthForm}
								link="/registration"
								titleText="Войти в приложение"
							/>
						}
					/>
					<Route
						path="/registration"
						element={
							<AuthPageContainer
								title="Регистрация"
								linkText="У вас есть аккаунт? Авторизуйтесь!"
								AuthForm={RegisterForm}
								link="/"
								titleText="Регистрация"
							/>
						}
					/>
					<Route path="*" element={<Page404/>} />
				</Routes>
			) : (
				<Routes>
					<Route path={'/'} element={<Navigate to="/team" replace />} />
					<Route path={'/registration'} element={<Navigate to="/team" replace />} />
					<Route path={'/team'} element={<MainPage />} />
                    <Route path={'/user/:id'} element={<PersonPage />} />
					<Route path="*" element={<Page404/>} />
				</Routes>
			)}
		</BrowserRouter>
	);
};

export default AppRouter;
