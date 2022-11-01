import { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import { auth } from "./firebase.js";
import Navbar from "./components/Navbar/Navbar";
import UserContext from "./context/userContext.js";
import { switchRoutes } from "./routes/appRoutes.js";
import Loader from "./components/shared/Loader.js";

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        setUser({
          uid: userAuth.uid,
          email: userAuth.email,
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>{switchRoutes()}</Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
    </UserContext.Provider>
  );
}

export default App;
