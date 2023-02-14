import useDocumentTitle from '../../../hooks/useDocumentTitle';
import HeaderUserPage from '../../Headers/HeaderUserPage';
import UserSection from '../../Sections/UserSection';

const PersonPage = () => {
	useDocumentTitle('Пользователь');
	return (
		<>
			<HeaderUserPage />
            <UserSection/>
		</>
	);
};

export default PersonPage;
