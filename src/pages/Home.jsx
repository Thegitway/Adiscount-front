import styled from "styled-components";
import AppBar from "../component/AppBar";
import { Product } from "../component/Product";


export default function Home() {

  const Scaffold=styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(235,235,235);

  `
  const Commercial=styled.img`
   width: 100%;
  `
const Row=styled.div`
display: flex;
width: 100%;
`
  return (
    <Scaffold> 
      <AppBar></AppBar>
      <a href="https://www.missionsignal.fr/produits/dentifrices.html"><Commercial src="./girl-smiling.png"/>
      </a>
      <Row>
     <Product flex="1"/>
     <Product flex="1"/>
     <Product flex="1"/>
     <Product flex="1"/>
      </Row>
      </Scaffold>
    
  )
}
