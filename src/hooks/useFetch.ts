import { useState } from 'react';

export default function useFetch(callback: () => Promise<any>) {
	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const fetchReq = async () => {
		try {
			setIsLoaded(true);
			await callback();
            if (error) {
                setError(null)
            }
		} catch (err) {
			if (err instanceof Error) {
				setError(err);
			} else {
				setError(new Error('Упс что-то пошло не так!'));
			}
		} finally {
			setIsLoaded(false);
		}
	};

	return [fetchReq, isLoaded, error] as const;
}
