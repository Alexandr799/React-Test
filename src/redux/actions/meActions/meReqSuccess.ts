import { ActionCreator } from 'redux';
import { EStateTypes } from '../../typesActions';

export interface IReqSuccess {
	type: EStateTypes.ME_REQ_SUCCESS;
    token:string
}


export const meReqSuccess: ActionCreator<IReqSuccess> = (token:string) => {
	return {
		type: EStateTypes.ME_REQ_SUCCESS,
        token
	};
};