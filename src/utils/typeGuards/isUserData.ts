import { isUser, IUser } from './isUserList';
import objectDefaultGuard from './objectDefaultGuard';

interface IUserDataFromServer {
	data: IUser;
}

export default function isUserDataFromServer(data:unknown): data is IUserDataFromServer {
	if (!objectDefaultGuard(data)) {
		return false;
	}

	if (typeof data.data !== 'object') {
		return false;
	}

	if (!isUser(data.data)) {
		return false;
	}

	return true;
}
