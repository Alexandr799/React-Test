import { ActionCreator } from 'redux';
import { EStateTypes } from '../../typesActions';

export interface IReq {
	type: EStateTypes.ME_REQ;
}


export const meReq: ActionCreator<IReq> = () => {
	return {
		type: EStateTypes.ME_REQ,
	};
};