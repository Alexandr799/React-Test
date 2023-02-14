import { ActionCreator } from 'redux';
import { EStateTypes } from '../../typesActions';

export interface IReqError {
	type: EStateTypes.ME_REQ_ERROR;
    error:Error
}


export const meReqError: ActionCreator<IReqError> = (error:Error) => {
	return {
		type: EStateTypes.ME_REQ_ERROR,
        error
	};
};