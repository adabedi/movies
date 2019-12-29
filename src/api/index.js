import { useReducer } from 'react';
import request from './request';

const initialState = {
  moviesList : {
  loading: true,
  movies: [],
  errorMessage: null
  },
  movieData: {
    loading: true,
    movie: {},
    errorMessage: null
  }
};

const movieListReducer= (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        moviesList: {
        loading: true,
        errorMessage: null
        }
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        moviesList: {
        loading: false,
        movies: action.payload.Search
        }
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        moviesList: {
        loading: false,
        errorMessage: action.error
        }
      };
    default:
      return state;
  }
};

const movieReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIE_REQUEST":
      return {
        ...state,
        movieData : {
        loading: true,
        errorMessage: null
        }
      };
    case "SEARCH_MOVIE_SUCCESS":
      return {
        ...state,
        movieData: {
        loading: false,
        movie: action.payload,
        errorMessage: null
        }
      };
    case "SEARCH_MOVIE_FAILURE":
      return {
        ...state,
        movieData: {
        loading: false,
        errorMessage: action.error
        }
      };
    default:
      return state;
  }
};

export const useFetchMovies = searchValue => {
  const [state, dispatch] = useReducer(movieListReducer, initialState);
  const type = 'MOVIES';
  request(`https://www.omdbapi.com/?s=${searchValue}&apikey=`, dispatch, type);
  return state;
};

export const useFetchMovie = searchValue => {
  const [state, dispatch] = useReducer(movieReducer, initialState);
  const type = 'MOVIE';
  request(`https://www.omdbapi.com/?i=${searchValue}&apikey=`, dispatch, type);
  return state;
};
