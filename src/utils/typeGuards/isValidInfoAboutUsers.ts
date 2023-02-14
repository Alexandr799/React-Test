import isUserList, { IUser } from './isUserList';
import objectDefaultGuard from './objectDefaultGuard';

interface IUsersInfo {
	data: IUser[];
	page: number;
	total_pages: number;
}

export function isValidInfoAboutUsers(data: unknown): data is IUsersInfo {
	if (!objectDefaultGuard(data)) return false;

	if (typeof data.page !== 'number') return false;

	if (typeof data.total_pages !== 'number') return false;

	if (!isUserList(data.data)) return false;

	return true;
}
