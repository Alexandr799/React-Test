import { ActionCreator } from 'redux';
import { EStateTypes } from '../../typesActions';

export interface IUserReqError {
	type: EStateTypes.USER_REQ_ERROR;
    error:Error
}


export const userReqError: ActionCreator<IUserReqError> = (error:Error) => {
	return {
		type: EStateTypes.USER_REQ_ERROR,
        error
	};
};