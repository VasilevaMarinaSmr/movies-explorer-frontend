import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import initMov from "../../utils/initMovies";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import PageNotFound from "../PageNotFound/PageNotFound";
import Preloader from "../Preloader/Preloader";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState(initMov);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoaging, setIsLoaging] = useState(false);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        {isLoaging ? (
          <Preloader />
        ) : (
          <>
            <Routes>
              <Route path="/" exact element={<Main />} />
              <Route
                path="/movies"
                element={<Movies movies={movies} isLoggedIn={isLoggedIn} />}
              />
              <Route
                path="/saved-movies"
                element={
                  <SavedMovies movies={movies} isLoggedIn={isLoggedIn} />
                }
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signin" exact element={<Login />} />
              <Route path="/signup" exact element={<Register />} />
              <Route path="*" exact element={<PageNotFound />} />
            </Routes>
          </>
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
