import { AnyAction, Reducer } from 'redux';
import { EStateTypes } from './typesActions';
import { IAuth } from './reducer/meReducer';
import { meReducer } from './reducer/meReducer';
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { IUserState, userReducer } from './reducer/userReducer';

export interface IRootState {
	me: IAuth;
	user: IUserState;
}

const rootReducer: Reducer<IRootState, AnyAction> = (
	state = {
		me: {
			token: localStorage.getItem('token'),
			errorAuth: false,
			loading: false,
		},
		user: {
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
	},
	action
) => {
	switch (action.type) {
		case EStateTypes.ME_REQ:
		case EStateTypes.ME_REQ_ERROR:
		case EStateTypes.ME_REQ_SUCCESS:
		case EStateTypes.ME_REQ_DEFAULT:
			return {
				...state,
				me: meReducer(state.me, action),
			};
		case EStateTypes.USER_REQ:
		case EStateTypes.USER_REQ_SUCCESS:
		case EStateTypes.USER_REQ_ERROR:
			return {
				...state,
				user: userReducer(state.user, action),
			};
		default:
			return state;
	}
};

const Store = createStore(rootReducer, composeWithDevTools());
export default Store;
