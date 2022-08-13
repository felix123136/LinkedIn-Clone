import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import Feed from "./Feed";
import { auth } from "./firebase";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, userAuth => {
      if(userAuth) {
        dispatch(login({
          email: userAuth.email,
					uid: userAuth.uid,
					displayName: userAuth.displayName,
					photoURL: userAuth.photoURL,
        }));
      }else {
        dispatch(logout());
      }
    })
  }, [dispatch])
  return (
    <div className="app">
      {
        !user ? (
          <Login />
        ) :  (
        <>
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
        )
      }
    </div>
  );
}

export default App;
