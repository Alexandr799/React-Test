import { ActionCreator } from 'redux';
import { IUser } from '../../../utils/typeGuards/isUserList';
import { EStateTypes } from '../../typesActions';

export interface IUserInfo {
	userInfo: IUser;
	text: string;
    tel:string
}

export interface IUserReqSuccess {
	type: EStateTypes.USER_REQ_SUCCESS
	userData: IUserInfo;
}

export const userReqSuccess: ActionCreator<IUserReqSuccess> = (userData: IUserInfo) => {
	return {
		type: EStateTypes.USER_REQ_SUCCESS,
		userData,
	};
};
