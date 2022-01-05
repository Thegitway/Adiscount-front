import styled from "styled-components"

export const Product = (props) => {

  const Scaffold=styled.div`
  flex:${props.flex};
  margin:3%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 20px;
`
const Image=styled.img`
   object-fit:cover;
  width: 100%;
  height: 50%;
  border-radius: 17px;
`


const Info=styled.h5`
margin:4px;
display: flex;
`
const Price=styled.p`
font-weight: bold;
font-size: 2vw;
color:red
`


  return (
    <Scaffold>
    <Image src={props.url}></Image>
    <Info>{props.name}</Info>
    <Price>{props.price}</Price>
    </Scaffold>
  )
}
