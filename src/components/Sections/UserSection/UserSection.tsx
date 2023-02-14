import { useSelector } from 'react-redux';
import { IUserState } from '../../../redux/reducer/userReducer';
import { IRootState } from '../../../redux/store';
import Loader from '../../Loader';
import css from './UserListSection.module.css';
import Tel from '../../Icons/Tel';
import Mail from '../../Icons/Mail';
import parsePhone from '../../../utils/parsePhone';

const UserSection = () => {
	const {
		loading,
		error,
		userData: {
			text,
			tel,
			userInfo: { email },
		},
	} = useSelector<IRootState, IUserState>((state) => state.user);
	return (
		<section>
			<div className={'container ' + css.container}>
				{loading && <Loader isLocal={true} />}
				{error && (
					<div>
						<div>{error.message}</div>
					</div>
				)}
				{!error && (
					<div className={css.userInfo}>
						<p className={css.userText}>{text}</p>
						<div className={css.contacts}>
							<a href={`tel:${tel}`} className={css.tel}>
                                <Tel/>
								<span className={css.contactsText}>{parsePhone(tel)}</span>
							</a>
							<a href={`mailto:${email}`} className={css.email}>
                                <Mail/>
								<span className={css.contactsText}>{email}</span>
							</a>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default UserSection;
