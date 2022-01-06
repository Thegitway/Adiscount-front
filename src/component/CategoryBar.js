import styled from "styled-components"



const Row=styled.div`
display: flex;
flex-direction:row;
justify-content: start;
align-items: center;
padding-left: 2%;
`
const Scaffold=styled.div`
width: 100vw;
`
const Column=styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
`
const Button=styled.button`
display:inline-block;
padding:0.35em 1.2em;
border:0.1em solid #FFFFFF;
margin:0.3em;
border-radius:0.12em;
box-sizing: border-box;
text-decoration:none;
font-family:'Roboto',sans-serif;
font-weight:300;
color:teal;
text-align:center;
transition: all 0.2s;
&:hover{
color:black;
background-color:coral;
}
`

export default function CategoryBar() {
  return (
    <Scaffold>
      <Row >
<Button>Fiesta</Button>
<Button>Books</Button>
      </Row>
    </Scaffold>
  )
}
