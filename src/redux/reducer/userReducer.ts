import { Reducer } from 'redux';
import { EStateTypes } from '../typesActions';
import { IUserReq } from '../actions/userActions/userReq';
import { IUserReqError } from '../actions/userActions/userReqError';
import { IUserReqSuccess } from '../actions/userActions/userReqSuccess';
import { IUserInfo } from '../actions/userActions/userReqSuccess';

export interface IUserState {
	userData: IUserInfo;
	error: Error | false;
	loading: boolean;
}

type ActionUserReq = IUserReq | IUserReqError | IUserReqSuccess;

export const userReducer: Reducer<IUserState, ActionUserReq> = (
	state = {
		userData: {
			userInfo: {
				id: 0,
				avatar: '',
				email: '',
				first_name: '',
				last_name: '',
			},
			tel: '',
			text: '',
		},
		error: false,
		loading: false,
	},
	action
) => {
	switch (action.type) {
		case EStateTypes.USER_REQ:
			return {
				userData: {
					userInfo: {
						id: 0,
						avatar: '',
						email: '',
						first_name: '',
						last_name: '',
					},
					tel: '',
					text: '',
				},
				loading: true,
				error: false,
			};
		case EStateTypes.USER_REQ_ERROR:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		case EStateTypes.USER_REQ_SUCCESS:
			return {
				...state,
				loading: false,
				error: false,
				userData: {
					...action.userData,
				},
			};
		default:
			return state;
	}
};
