import React, { useEffect } from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Profile from './components/Profile/Profile';
import MyList from './components/MyList/MyList';
// import Banner from './components/Banner/Banner';

function App() {
  const user = useSelector(selectUser);
  // const user = null;
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth.email);
        console.log(userAuth.uid);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        )
      }
      else {
        //Logout
        dispatch(logout());
        // console.log("logout");
      }
    });
    return unsubscribe;
  }, [dispatch])

  return (
    <div className="App">
      <BrowserRouter>
        {
          !user ? <Login /> : <Routes>
            <Route exact path='/mylist' element={<MyList />} />
            <Route exact path='/profile' element={<Profile />} />
            <Route exact path='/' element={<Home />} />
          </Routes>
        }

      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;
