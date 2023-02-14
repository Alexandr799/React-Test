import { Dispatch } from 'react';
import apiRequester from '../../utils/Api/postService';
import { meReq } from '../actions/meActions/meReq';
import { AnyAction } from 'redux';
import { meReqSuccess } from '../actions/meActions/meReqSuccess';
import { meReqError } from '../actions/meActions/meReqError';
import isObjWithToken from '../../utils/typeGuards/isObjWithToken';

const registrateAction = async (email: string, password: string, dispatch: Dispatch<AnyAction>) => {
	dispatch(meReq());
	apiRequester
		.redistrateGetToken(email, password)
		.then((res) => {
			if (!isObjWithToken(res.data)) {
				const error = new Error('Кажется у нас проблемы, попробуйте зарегестрироваться позже!');
				error.name = 'ServerTypeError';
				throw error;
			}
			localStorage.setItem('token', res.data.token);
			dispatch(meReqSuccess(res.data.token));
		})
		.catch((err) => {
			if (!(err instanceof Error)) {
				dispatch(meReqError(new Error('Что то пошло не так! Попробуйте зайти позже!')));
				return;
			}
			let message =
				err.name === 'ServerTypeError'
					? 'Кажется у нас проблемы, попробуйте авторизироваться позже!'
					: 'Что то пошло не так при регистрации';
			dispatch(meReqError(new Error(message)));
		});
};

export default registrateAction;
