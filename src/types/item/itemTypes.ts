export interface Genre{
    id: number;
    name: string;
}

export interface Movie{
    adult?:boolean;
    backdrop_path?:string;
    genre_ids?:Array<number>;
    id:number;
    original_language?: string;
    original_title?:string;
    overview?: string;
    popularity?:number;
    poster_path?:string;
    release_date?:string;
    title?:string;
    video?:boolean;
    vote_average?:number;
    vote_count?: number;
    localFavourite?: boolean;
}

export interface RequestTokenResponse{
    success: boolean;
    expires_at?: Date | string;
    request_token: string;
  }

  export interface LoginParmas{
    username: string;
    password: string;
    request_token: string;
  }
  
  export interface UserCredentials{
    username: string;
    password: string;
  }