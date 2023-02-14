import { ActionCreator } from 'redux';
import { EStateTypes } from '../../typesActions';

export interface IUserReq {
	type: EStateTypes.USER_REQ;
}


export const userReq: ActionCreator<IUserReq> = () => {
	return {
		type: EStateTypes.USER_REQ,
	};
};