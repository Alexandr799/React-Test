import axios from 'axios';
import { IPostService } from './types';

class ApiAdapter implements IPostService {
	async authGetToken(email: string, password: string) {
		return axios.post('https://reqres.in/api/login', { email, password });
	}

	async redistrateGetToken(email: string, password: string) {
		return axios.post('https://reqres.in/api/register', { email, password });
	}

	async getUsers(page?: string | null) {
		if (!page) {
			return axios.get('https://reqres.in/api/users');
		}
		if (parseInt(page) && parseInt(page) > 0) {
			return axios.get('https://reqres.in/api/users', { params: { page } });
		} else {
			const error = new Error('Такой страницы не существует!');
			error.name = 'NaN';
			throw error;
		}
	}

	async getUserById(id: number) {
        if (isNaN(id)){
            const error = new Error('Не верный тим данных!')
            error.name = 'InValidNumber'
            throw error
        }
		return axios.get(`https://reqres.in/api/users/${id}`);
	}
}

const apiRequester = new ApiAdapter();

export default apiRequester;
