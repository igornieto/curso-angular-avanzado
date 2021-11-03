export interface Movie {
  title: string;
  overview: string;
  poster?: string;
  adult: boolean;
  vote: number;
}

export interface MoviesList {
  page: number;
  totalResults: number;
  totalPages: number;
  results: Movie[];
}