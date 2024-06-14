import { Movie } from '../models/Movie';

class QueryService<T> {
	private urlBase: string = 'https://api.themoviedb.org/3/discover/movie';
	private options: RequestInit = {
		method: 'GET',
		headers: {
			accept: 'application/json',
		},
	};

	constructor(public apiKey: string) {
		this.options.headers = {
			Authorization: `Bearer ${apiKey}`,
		};
	}

	public async fetchAll(page: number): Promise<T[]> {
		const url = `${this.urlBase}?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;

		try {
			const response = await fetch(url, this.options);
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const data = await response.json();
			return data.results;
		} catch (error) {
			console.error('Error:', error);
			throw error;
		}
	}
}

const service = new QueryService<Movie>(process.env.API_KEY as string);



export default service;
