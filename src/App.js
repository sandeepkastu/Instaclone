import React from "react";
import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter,Route } from "react-router-dom";
import Home from "./components/screens/Home";
import Signup from "./components/screens/Signup";
import Signin from "./components/screens/Login";
import Profile from "./components/screens/Profile";
import CreatePost from "./components/screens/CreatePost";



function App() {
  return (
    <div >
    <BrowserRouter>
        
             <Navbar/>
          <Route exact path='/'>
             <Home/>
          </Route>  
          <Route path='/signup'>
             <Signup/>
          </Route>
          <Route path='/signin'>
             <Signin/>
          </Route>
          <Route path='/profile'>
             <Profile/>
          </Route>
      
          <Route path='/createpost'>
             <CreatePost/>
          </Route>
      

    </BrowserRouter>
    
     
    </div>
  );
}

export default App;
