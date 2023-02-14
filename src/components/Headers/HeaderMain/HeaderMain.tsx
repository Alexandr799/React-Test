import * as React from 'react';
import HeaderContainer from '../HeaderContainer';
import css from './HeaderMain.module.css';

const HeaderMain = () => {
	return (
		<HeaderContainer className={css.header}>
			<div className={css.content}>
				<h1 className={css.title}>Наша команда</h1>
				<p className={css.subtitle}>
					Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить
					выход из любых, даже самых сложных ситуаций.
				</p>
			</div>
		</HeaderContainer>
	);
};

export default HeaderMain;
