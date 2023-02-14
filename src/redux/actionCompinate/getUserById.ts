import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import apiRequester from '../../utils/Api/postService';
import { userReqSuccess } from '../actions/userActions/userReqSuccess';
import { userReq } from '../actions/userActions/userReq';
import isUserDataFromServer from '../../utils/typeGuards/isUserData';
import { userReqError } from '../actions/userActions/userReqError';

const FAKE_TEXT =
	`Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты.\n\n
    В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно.\n\n
    Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов.`

const FAKE_NUMBER = '79998887755';

const getUserById = async (id: number, dispatch: Dispatch<AnyAction>) => {
	dispatch(userReq());
	apiRequester
		.getUserById(id)
		.then((res) => {
			if (!isUserDataFromServer(res.data)) {
				throw new Error('Что то пошло не так! Попробуйте зайти позже!');
			}
			dispatch(userReqSuccess({ tel: FAKE_NUMBER, text: FAKE_TEXT, userInfo: res.data.data }));
		})
		.catch((err) => {
			if (!(err instanceof Error)) {
				dispatch(userReqError(new Error('Что то пошло не так! Попробуйте зайти позже!')));
				return;
			}
			let message = err.name === 'InValidNumber' ? 'Такой юзера похоже не существует!' : 'Что то пошло не так...';
			dispatch(userReqError(new Error(message)));
		});
};

export default getUserById;
