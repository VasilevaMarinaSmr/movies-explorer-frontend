import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import mainApi from "../../utils/MainApi";
import { SUCCESSFUL_CODE } from "../../utils/constants";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import PageNotFound from "../PageNotFound/PageNotFound";
import Preloader from "../Preloader/Preloader";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import "./App.css";

function App() {
  const navigate = useNavigate();
  let location = useLocation();

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const [infoMessage, setInfoMessage] = useState({
    isShow: false,
    message: "",
    code: SUCCESSFUL_CODE,
  });

  function checkAuth() {
    const curentPath = location.pathname;
    mainApi
      .getUserInfo()
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          setLoggedIn(false);
          setCurrentUser({});
          navigate("/signin", { replace: true });
        } else {
          setLoggedIn(true);
          navigate(curentPath, { replace: true });
        }
      })
      .catch((err) => console.error("checkAuth " + err));
  }

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    mainApi
      .getStartData()
      .then(([user, data]) => {
        setLoggedIn(true);
        setCurrentUser(user);
        setSavedMovies(data);        
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  }, [isLoggedIn]);

  function handleResetInfoMessage() {
    if (infoMessage.isShow) {
      setInfoMessage({
        ...infoMessage,
        isShow: false,
        message: "",
        type: "",
        code: SUCCESSFUL_CODE,
      });
    }
  }

  function handleSaveMovie(movie) {
    mainApi
      .saveMovie(movie)
      .then((newCard) => {
        setSavedMovies([newCard, ...savedMovies]);
      })
      .catch((err) => console.log(err));
  }

  function handleDeleteMovie(movieId) {    
    mainApi
      .deleteMovie(movieId)
      .then(() => {
        setSavedMovies((state) =>
          state.filter((mov) => mov.id || mov.movieId !== movieId)
        );
      })
      .catch((err) => console.log(err));
  }

  function handleLogin(email, password) {
    setIsFormDisabled(true);
    mainApi
      .login({ email: email, password: password })
      .then((data) => {
        setLoggedIn(true);
        setCurrentUser(data);
        navigate("/movies", { replace: true });
      })
      .catch(({ message, statusCode }) => {
        setInfoMessage({
          ...infoMessage,
          isShown: true,
          message,
          code: statusCode,
          type: "login",
        });
      })
      .finally(() => setIsFormDisabled(false));
  }

  function handleRegister(name, email, password) {
    setIsFormDisabled(true);
    mainApi
      .register({ name: name, email: email, password: password })
      .then((data) => {
        if (data) {
          handleLogin(data.email, password);
        }
      })
      .catch(({ message, statusCode }) => {
        setInfoMessage({
          ...infoMessage,
          isShown: true,
          message,
          code: statusCode,
          type: "register",
        });
      })
      .finally(() => setIsFormDisabled(false));
  }

  function handleSignOut() {
    mainApi
      .logout()
      .then((res) => {
        setLoggedIn(false);
        setCurrentUser({});
        localStorage.clear();
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser(name, email) {
    mainApi
      .editUserInfo({ name: name, email: email })
      .then((data) => {
        setCurrentUser(data);
        setInfoMessage({
          ...infoMessage,
          isShow: true,
          type: "profile",
        });
      })
      .catch(({ message, statusCode }) => {
        setInfoMessage({
          ...infoMessage,
          isShown: true,
          message,
          code: statusCode,
          type: "profile",
        });
      });
  }

  

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app"
      onClick={infoMessage.isShow ? handleResetInfoMessage : null}>
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Routes>
              <Route
                path="/"
                exact
                element={<Main isLoading={isLoading} isLoggedIn={isLoggedIn} />}
              />

              <Route
                path="/movies"
                element={
                  <ProtectedRoute
                    element={Movies}
                    isLoggedIn={isLoggedIn}
                    savedMovies={savedMovies}
                    onSaveMovie={handleSaveMovie}
                    onDeleteMovie={handleDeleteMovie}
                    
                  />
                }
              />

              <Route
                path="/saved-movies"
                element={
                  <ProtectedRoute 
                  element={SavedMovies}
                  isLoggedIn={isLoggedIn}
                  savedMovies={savedMovies}
                  onDeleteMovie={handleDeleteMovie}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute 
                  element={Profile}
                  onSignOut={handleSignOut}
                  onUpdate={handleUpdateUser}
                  infoMessage={infoMessage}
                  isLoggedIn={isLoggedIn}

                  />
                }
              />
              <Route
                path="/signin"
                exact
                element={
                  <Login
                    onLogin={handleLogin}
                    infoMessage={infoMessage}
                    isFormDisabled={isFormDisabled}
                  />
                }
              />
              <Route
                path="/signup"
                exact
                element={
                  <Register
                    onRegister={handleRegister}
                    infoMessage={infoMessage}
                    isFormDisabled={isFormDisabled}
                  />
                }
              />
              <Route path="*" exact element={<PageNotFound />} />
            </Routes>
          </>
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}
export default App;
