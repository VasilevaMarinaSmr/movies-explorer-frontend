import { MOVIES_API_URL } from './constants';

export class MoviesApi {
  constructor(setting) {
    this._url = setting.url;
    this._headers = setting.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._url}`, {
      method: "GET",      
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

const moviesApi = new MoviesApi({
  url: `${MOVIES_API_URL}/beatfilm-movies` ,
  headers: {
    "Content-Type": "application/json",
  },
});

export default moviesApi;
