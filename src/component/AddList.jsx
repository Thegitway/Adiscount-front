
import Todo from './Todo';
import {v4} from 'uuid';
import {Link} from 'react-router-dom';
import {useState,useRef} from 'react';
import styled from 'styled-components';

export default function AddList() {
var [todoList,setTodoList]=useState([])

var inputRef=useRef('');


//style
const Container = styled.div`
width:100%;
height: 5vh;
align-items: center;
justify-content: center;
display: flex;
background-color: aliceblue;
`
  return (
   <>
   <div><Link to="/"><Container>Adiscount</Container></Link></div>

   <form onSubmit={(e)=>{
         e.preventDefault();
     setTodoList([...todoList,
     {id:v4(),data:inputRef.current.value}])
     inputRef.current.value=''   
     }}>
   <input ref={inputRef} type="text"></input>
   </form>
   <br/>
   { 
     todoList.map((item)=>{
      return <Todo key={item.id} id={item.id} data={item.data} todoList={todoList} setTodoList={setTodoList}></Todo>
     })
   }

   </>
  );
}

