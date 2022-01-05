import styled from "styled-components"

export const Product = (props) => {

  const Scaffold=styled.div`
  flex:${props.flex};
  width: 100%;
  margin:1%;
  display:flex;
background-color: yellow;
align-items: center;
justify-content: center;


  `

  return (
    <Scaffold>
      s
    </Scaffold>
  )
}
