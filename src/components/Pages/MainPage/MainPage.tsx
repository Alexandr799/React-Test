import useDocumentTitle from '../../../hooks/useDocumentTitle';
import HeaderMain from '../../Headers/HeaderMain';
import UserListSection from '../../Sections/UserListSection';

const MainPage = () => {
    useDocumentTitle('Наша команда')
	return (
		<>
			<HeaderMain />
			<main>
				<UserListSection />
			</main>
		</>
	);
};

export default MainPage;
