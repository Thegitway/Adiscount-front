import styled from "styled-components";
import PubBar from "../component/pubBar.js";
import { Product } from "../component/Product";
import CategoryBar from "../component/CategoryBar";
import {useEffect,useState} from "react";
import { getProduct } from "../API/apiService.js";
import { v4 } from "uuid";

const Scaffold=styled.div`
  
  width: 100%;
  background-color: rgb(245,245,245);
  
  `
  
  
const Row=styled.div`
display: flex;
height: 50vh;
width: 100%; 
`

export default function Home() {


  
  const [products,setProducts]=useState([]);
  useEffect(()=>{
     getProduct().then((x)=>{
    setProducts(x);
   })
       
  },[])
  
let vuPro=[]
let vuRow=[]


const t= () =>
{
  let categories= []

  products.map((item)=>{
  categories.push(item.category)
  })
  return [...new Set(categories)];
  
}


  return (
    <Scaffold> 

      <PubBar></PubBar>

      <CategoryBar category={t()} ></CategoryBar>
      
      {  
        products.map((item,index)=>
         {
      if(vuPro.length<5)
         vuPro.push(<Product key={v4()} flex="1" name={item.info} price={`${item.price} ${item.unite}`} id={item.pictureId}/>)
       else
       {
         vuRow.push(<Row key={v4()}>{vuPro}</Row>)
         vuPro=[]
         vuPro.push(<Product key={v4()} flex="1" name={item.info} price={`${item.price} ${item.unite}`} id={item.pictureId}/>)
       }

      if(index>=products.length-1)
      {
        if(vuPro.length!==0)
        {
          vuRow.push(<Row key={v4()}>{vuPro}</Row>)
         vuPro=[]
         vuPro.push(<Product key={v4()} flex="1" name={item.info} price={`${item.price} ${item.unite}`} id={item.pictureId}/>)

        }
      return vuRow
      } 
         })    
    }
    
      </Scaffold>
    
  )
}
