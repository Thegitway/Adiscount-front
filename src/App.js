
import Todo from './Todo';
import {v4} from 'uuid';
import {Link} from 'react-router-dom';
import {useState,useRef} from 'react';
import AppBar from './component/AppBar';
function App() {
var [todoList,setTodoList]=useState([])

var inputRef=useRef('');

  return (
   <>
   <AppBar/>
    
   <form onSubmit={(e)=>{
     e.preventDefault();
     setTodoList([...todoList,{id:v4(),data:inputRef.current.value}])
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

export default App;
