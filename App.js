import React,{useState} from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

//react-router
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"

//react toast
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

//firebase
import firebase from "firebase/app"
import "firebase/auth"

//componenets
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import pageNotFound from "./pages/pageNotFound";
import { UserContext } from './context/UserContext';

import Footer from "./layout/Footer"
import Header from './layout/Header';

import firebaseConfig from "./Config/firebaseConfig"
//init firebase
firebase.initializeApp(firebaseConfig)

const App=()=> {

  const [user,setUser] = useState(null)
  return (
<Router>
  <ToastContainer/>
  <UserContext.Provider value = {{user,setUser}}>
  <Header/>
    <Switch>
      <Route exact path = "/" component = {Home}/>
      <Route exact path = "/SignIn" component = {SignIn}/>
      <Route exact path = "/SignUp" component = {SignUp}/>
      <Route exact path = "*" component = {pageNotFound}/>
    </Switch>
    <Footer/>
  </UserContext.Provider>
</Router>
    
  );
}

export default App;
