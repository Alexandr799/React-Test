export interface IPostService {
	authGetToken: (email: string, password: string) => unknown;
	redistrateGetToken: (email: string, password: string) => unknown;
	getUsers: (page?: string) => unknown;
	getUserById: (id: number) => unknown;
}
