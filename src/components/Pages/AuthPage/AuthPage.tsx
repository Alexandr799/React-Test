import * as React from 'react';
import { Link } from 'react-router-dom';
import css from './AuthPage.module.css';
import useDocumentTitle from '../../../hooks/useDocumentTitle';

interface IAuthContainer {
	linkText: string;
	AuthForm: () => JSX.Element;
	title: string;
	link: string;
	titleText: string;
}

const AuthPage = ({ linkText, AuthForm, link, title, titleText }: IAuthContainer) => {
	useDocumentTitle(titleText);
	return (
		<div className={css.wrapper}>
			<h1 className={css.title}>{title}</h1>
			<div className={css.formWrapper}>
				<AuthForm />
			</div>
			<Link to={link} className={css.linkReg}>
				{linkText}
			</Link>
		</div>
	);
};

export default AuthPage;
