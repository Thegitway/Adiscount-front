import styled from "styled-components";
import AppBar from "../component/AppBar";
import { Product } from "../component/Product";
import {Link} from "react-router-dom"

export default function Home() {

  const Scaffold=styled.div`
  
  width: 100%;
  background-color: rgb(235,235,235);
  `
  const Commercial=styled.img`
   width: 100%;
  `
const Row=styled.div`
display: flex;
height: 50vh;
width: 100%;
`
  return (
    <Scaffold> 
      <AppBar></AppBar>
      <a href="https://www.missionsignal.fr/produits/dentifrices.html"><Commercial src="./girl-smiling.png"/>
      </a>
      <Row>
      <Link to="/addList">
     <Product flex="1" name="Berserk" price="500DH" url="berserk1.png"/></Link>
     <Product flex="1" name="Lemon" price="1DH / U" url="citron.png"/>
     <Product flex="1" name="Salt" price="3DH / KG" url="sel.png"/>
     <Product flex="1" name="Corona" price="28DH" url="corona.png"/>
     <Product flex="1" name="Tekila" price="289DH" url="tekila.png"/>
     <Product flex="1" name="Sake" price="90.9DH" url="sake.png"/>

      </Row>
      </Scaffold>
    
  )
}
