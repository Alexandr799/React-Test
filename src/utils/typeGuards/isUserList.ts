import objectDefaultGuard from './objectDefaultGuard';

export interface IUser {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	avatar: string;
}

export function isUser(data:unknown):data is IUser {
    if (!objectDefaultGuard(data)) {
        return false;
    }

    if (typeof data.id !== 'number') {
        return false;
    }

    if (typeof data.first_name !== 'string') {
        return false;
    }

    if (typeof data.last_name !== 'string') {
        return false;
    }

    if (typeof data.avatar !== 'string') {
        return false;
    }

    if (typeof data.email !== 'string') {
        return false;
    }
    return true
}

export default function isUserList(data: unknown): data is IUser[] {
	if (!Array.isArray(data)) {
		return false;
	}

	for (let u of data) {
		if (!isUser(u)) {
			return false;
		}
	}

	return true;
}
