import styled from "styled-components";
import AppBar from "./component/AppBar";
import { Outlet,useNavigate,useHistory } from "react-router-dom";
import { useEffect } from "react";
export default function App() {

  const Scaffold=styled.div`
  
  width: 100%;
  background-color: white;
  `

const navigate = useNavigate()
useEffect(()=>{
 if(window.location.href.charAt(window.location.href.length-1)==='/')
   navigate("/home");
},[]);

  return (
    <Scaffold >
      <AppBar></AppBar>
     <Outlet/>
      </Scaffold>
    
  )
}
