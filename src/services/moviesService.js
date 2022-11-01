import axios from "../axios";
import { getSessionId } from "./sessionService";

const fetchTrendingMovies = (pageNumber = 1) =>
  axios.get(
    `/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${pageNumber}`
  );

const fetchFilteredMedia = (mediaType, year, genre, pageNumber = 1) =>
  axios.get(
    `/discover/${mediaType}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&original_language=%22en%22&primary_release_date.gte=${year}-01-01&primary_release_date.lte=${year}-12-31&with_genres=${genre}&page=${pageNumber}`
  );

const fetchGenres = () =>
  axios.get(
    `/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
  );

const fetchMovieReviews = (id, pageNumber = 1) =>
  axios.get(
    `/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${pageNumber}`
  );

const fetchMovie = (id) =>
  axios.get(
    `/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
  );

const fetchTvShow = (id) =>
  axios.get(
    `/tv/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
  );

const rateMedia = (mediaType, mediaId, rating) =>
  axios.post(
    `/${mediaType}/${mediaId}/rating?api_key=${
      process.env.REACT_APP_TMDB_API_KEY
    }&guest_session_id=${getSessionId()}`,
    { value: rating }
  );

export {
  fetchTrendingMovies,
  fetchFilteredMedia,
  fetchGenres,
  fetchMovieReviews,
  fetchMovie,
  fetchTvShow,
  rateMedia
}