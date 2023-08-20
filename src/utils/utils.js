
export function convertHoursMinutes(min) {
  if (min > 60) {
    return `${Math.floor(min / 60)}ч ${min % 60}м`;
  } else if (min === 60) {
    return "1ч";
  } else {
    return `${min}мин`;
  }
}

export function filterMovies(movies, searchQuery, shortFilms) {
  const foundMovies = movies.filter((item) => {
    const nameRuLowCase = String(item.nameRU).toLowerCase();
    const nameEnLowCase = String(item.nameEN).toLowerCase();
    const searchStr = searchQuery.toLowerCase().trim();
    return (
      nameRuLowCase.indexOf(searchStr) !== -1 ||
      nameEnLowCase.indexOf(searchStr) !== -1
    );
  });

  if (shortFilms === "on") {
    return foundMovies.filter((item) => item.duration < 40);
  }
  return foundMovies;
}

export function addCoverMovies(movies) {
  movies.forEach((movie) => {
    if (!!movie.image) {
      movie.thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;
      movie.image = `https://api.nomoreparties.co${movie.image.url}`;
    } else {
      movie.image = "https://g2.dcdn.lt/images/pix/kinas-76443525.jpg";
      movie.thumbnail = "https://g2.dcdn.lt/images/pix/kinas-76443525.jpg";
    }
  });
}


export function getSavedMovieCard(arr, id) {
  return arr.find((item) => {
    return item.movieId === id;
  });
}

