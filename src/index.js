import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddList from './pages/AddList';
import Home from './pages/Home.jsx';
ReactDOM.render(
 
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<App/>}>
      <Route path="/home" element={<Home/>}/>
       <Route path="/addList" element={<AddList/>}/>
      </Route>
     

     
     { /*no matching*/ }
     <Route path="*" element={
       <h1>No element found!</h1>
     } />

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
  ,
  document.getElementById('root')
);