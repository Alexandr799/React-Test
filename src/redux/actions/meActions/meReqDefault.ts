import { ActionCreator } from 'redux';
import { EStateTypes } from '../../typesActions';

export interface IReqDef {
	type: EStateTypes.ME_REQ_DEFAULT;
}


export const meReqDefault: ActionCreator<IReqDef> = () => {
	return {
		type: EStateTypes.ME_REQ_DEFAULT,
	};
};