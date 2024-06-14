export type Movie = {
	adult: boolean;
	backdrop_path: string | null;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string | null;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

export type SortDirection = 'asc' | 'desc';
export interface SearchScope {
	name: string;
	parameters: unknown[];
}

export interface SearchFilter {
	field: string;
	operator?: string;
	value: unknown;
	type?: string;
	nested?: SearchFilter[];
}

export interface SearchSort {
	field: string;
	direction: SortDirection;
}

export interface SearchSelect {
	field: string;
}

export interface SearchInclude {
	relation?: string;
	filters?: SearchFilter[];
	limit?: number;
	page?: number;
	includes?: SearchInclude[];
	sorts?: SearchSort[];
}

export interface SearchAggregate {
	relation: string;
	type: string;
	field?: string;
	filters?: SearchFilter[];
}

export interface SearchInstructionField {
	name: string;
	value: string | number | boolean;
}

export interface SearchInstruction {
	name: string;
	fields: SearchInstructionField[];
	isManager?: boolean;
}

export type SearchGate =
	| 'create'
	| 'view'
	| 'update'
	| 'delete'
	| 'restore'
	| 'forceDelete';

export interface Search {
	scopes?: SearchScope[];
	filters?: SearchFilter[];
	sorts?: SearchSort[];
	selects?: SearchSelect[];
	includes?: SearchInclude[];
	aggregates?: SearchAggregate[];
	instructions?: SearchInstruction[];
	gates?: SearchGate[];
	page?: number;
	limit?: number;
}

export interface SearchRequest {
	search: Search;
}

export const initialUserSearchInstruction: SearchInstruction = {
	name: 'search',
	fields: [
		{
			name: 'search',
			value: '',
		},
	],
};



export type ExtendedProps = {
	[key: string]: unknown;
};

export interface SelectProps<T > {
	options: T[];
	className?: string;
	label: string;
	fetchNextPage: () => void;
	onSelect: (value: ExtendedProps) => void;
	selected: ExtendedProps;
	selectionKeys: (keyof ExtendedProps)[];
	isFetchingNextPage?: boolean;
	placeholder?: string;
 }
