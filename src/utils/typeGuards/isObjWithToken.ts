import objectDefaultGuard from './objectDefaultGuard';

interface ITokenObj {
	token: string;
}

export default function isObjWithToken(data: unknown): data is ITokenObj {
	if (!objectDefaultGuard(data)) {
		return false;
	}
	if (typeof data.token !== 'string') {
		return false;
	}
    
	return true;
}
