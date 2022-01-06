import styled from "styled-components";
import AppBar from "../component/AppBar";
import { Product } from "../component/Product";
import CategoryBar from "../component/CategoryBar";
export default function Home() {

  const Scaffold=styled.div`
  
  width: 100%;
  background-color: rgb(245,245,245);
  
  `
  const Commercial=styled.img`
   object-fit: cover;
  width: 100%;
  `
  const LinkContainer=styled.div`
  width: 33vw;
  
  `
  const Signal=styled.div`
  display: flex;
  border-bottom:4px;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-color: coral;
  border-style: solid;
  background-color: white;
  width: 100vw;
  align-items: center;
  justify-content: space-around;
   
  `
  const SignalImage=styled.img`
  width:10vw;
  `
  
const Column=styled.div`
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
`
const Row=styled.div`
display: flex;
height: 50vh;
width: 100%; 
`


  return (
    <Scaffold> 
      
      <a  style={{"text-decoration":"none"}} href="https://www.missionsignal.fr/produits/dentifrices.html">
      <Signal>
      <LinkContainer ><Commercial src="./girl-smiling.png"/></LinkContainer>
    <Column>
      <SignalImage flex={1} src="signal.png"/>
      <div flex={1} style={{"font-weight":"bold","color":"teal"}}>
      signal will take car of you
      </div></Column>
      
      
      </Signal></a>
      <CategoryBar></CategoryBar>
      <Row>
     
     <Product flex="1" name="Berserk" price="500DH" url="berserk1.png"/>
     <Product flex="1" name="Lemon" price="1DH / U" url="citron.png"/>
     <Product flex="1" name="Salt" price="3DH / KG" url="sel.png"/>
     <Product flex="1" name="Corona" price="28DH" url="corona.png"/>
     <Product flex="1" name="Tekila" price="289DH" url="tekila.png"/>
     <Product flex="1" name="Sake" price="99.9DH" url="sake.png"/>

      </Row>
      </Scaffold>
    
  )
}
