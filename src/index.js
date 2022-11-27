import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Profile from './pages/profile/Profile';
import Feed from './components/feed/Feed';
import Login from './pages/login/Login';
import Register from './pages/Register/Register'
import Home from "./pages/home/Home";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
  ReactDOM.render(
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route exact path="/home" element={<Home />} />

        <Route exact path="/feed" element={<Feed />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>,
    document.getElementById("root")
  );

  
    
  

