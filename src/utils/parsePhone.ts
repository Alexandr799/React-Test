import { parsePhoneNumber } from 'libphonenumber-js';

const parsePhone = (tel: string) => {
	try {
		const phoneNumber = parsePhoneNumber(tel, 'RU');
		return '+' + phoneNumber.format('NATIONAL').replace('8', '7');
	} catch {
		return 'Ошибка при получении номера';
	}
};

export default parsePhone;
