import {Genre} from '../types/item/itemTypes';

export const API_KEY: string = 'e631bc3387fa4dce6039727d323c9654';

export const IS_LOGGED_IN: string = 'IS_LOGGED_IN';

export const BEARER_TOKEN: string =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjMxYmMzMzg3ZmE0ZGNlNjAzOTcyN2QzMjNjOTY1NCIsIm5iZiI6MTcyMDg1OTQzOC4yNzY5MzUsInN1YiI6IjVjZWZlZWRlOTI1MTQxNDQ5YWI5MTdmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qqG0Z6P0x4_2lNK2hlD13fBG76_2q5g64URtLkBtG5k';

export const MOVIES_API_URL = 'https://api.themoviedb.org/3/';

export const IMAGE_BASE_URI = 'https://image.tmdb.org/t/p/w342';

export const API_READ_ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjMxYmMzMzg3ZmE0ZGNlNjAzOTcyN2QzMjNjOTY1NCIsIm5iZiI6MTcyMDcxMjEyNi41NzQ3MjUsInN1YiI6IjVjZWZlZWRlOTI1MTQxNDQ5YWI5MTdmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7uC2bh2rbtgaKlN0khbBgeGYxLXdeOMy9XkjW2bnLxA';

export const LOCAL_MOVIES_DATA = 'LOCAL_MOVIES_DATA';

export const REQUEST_TOKEN_KEY = 'REQUEST_TOKEN_KEY';

export const genres: Array<Genre> = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Music',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV Movie',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
];
