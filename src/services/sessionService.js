import axios from "../axios";

const sessionIdKey = "guest-session-id";

const createSessionId = () =>
  axios.get(
    `/authentication/guest_session/new?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
  );

const getSessionId = () => sessionStorage.getItem(sessionIdKey);

const setSessionId = (value) =>
  sessionStorage.setItem(sessionIdKey, value);

const removeSessionId = () => sessionStorage.removeItem(sessionIdKey);

export {
  createSessionId,
  getSessionId,
  setSessionId,
  removeSessionId
}