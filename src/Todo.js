import React from 'react';
import { Button,Col,Row,Container } from 'react-bootstrap';

export default function Todo(props)
{

  return(
    <Container  >
    <Row className="justify-content-md-center">
    <Col md="auto">
   <div>{props.data}</div></Col>
   <Col md="auto"><Button onClick={()=>{
      console.log(props.id)
     props.setTodoList(props.todoList.filter(data => data.id!==props.id
     ))
   }}>Delete</Button>
   </Col>
   <Col md="auto">
   <div>{props.data}</div></Col>
   </Row>
   </Container>
  )
}