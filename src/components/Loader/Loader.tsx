import css from './Loader.module.css';

interface ILoader {
	isLocal?: boolean;
}

const Loader = ({ isLocal }: ILoader) => {
	const position = isLocal ? { position: 'absolute' as const } : { position: 'fixed' as const };
	return (
		<div className={css.modal} style={position}>
			<div className={css.spinner}></div>{' '}
		</div>
	);
};

export default Loader;
