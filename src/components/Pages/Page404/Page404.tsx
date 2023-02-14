import { Link } from 'react-router-dom';
import css from './Page404.module.css'

const Page404 = () => {
	return (
		<div style={{ maxWidth: 1000, margin: '0 auto', textAlign:'center' }}>
			<h1>Ошибка 404</h1>
			<h2 style={{ textAlign: 'center' }} className={css.link}>
				<Link to={'/'}>Вернуться на главную</Link>
			</h2>
		</div>
	);
};

export default Page404;
