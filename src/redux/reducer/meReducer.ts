import { Reducer } from 'redux';
import { EStateTypes } from '../typesActions';
import { IReq } from '../actions/meActions/meReq';
import { IReqError } from '../actions/meActions/meReqError';
import { IReqSuccess } from '../actions/meActions/meReqSuccess';
import { IReqDef } from '../actions/meActions/meReqDefault';

export interface IAuth {
	token: string | null;
	errorAuth: Error | false;
	loading: boolean;
}

type ActionMeReq = IReq | IReqError | IReqSuccess | IReqDef;

export const meReducer: Reducer<IAuth, ActionMeReq> = (
	state = {
		token: localStorage.getItem('token'),
		errorAuth: false,
		loading: false,
	},
	action
) => {
	switch (action.type) {
		case EStateTypes.ME_REQ:
			return {
				...state,
				loading: true,
				errorAuth: false,
			};
		case EStateTypes.ME_REQ_DEFAULT:
			return {
				...state,
				loading: false,
				errorAuth: false,
                token:null
			};
		case EStateTypes.ME_REQ_ERROR:
			return {
				...state,
				loading: false,
				errorAuth: action.error,
			};
		case EStateTypes.ME_REQ_SUCCESS:
			return {
				...state,
				loading: false,
				token: action.token,
			};
		default:
			return state;
	}
};
