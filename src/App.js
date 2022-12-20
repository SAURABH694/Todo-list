import React,{useState} from 'react'
import TodoList from './TodoList';
import './App.css';


const App = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => response.json())
  .then((json) => console.log(json));
  const [task,setTask] = useState("");
  const [todos,setTodos] = useState([]);

  const changeHandler = e =>{
    setTask(e.target.value)
  }
  const submitHandler = e =>{
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    e.preventDefault();
    const newTodos = [...todos,task];
    setTodos(newTodos);
    setTask("");
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  }
  const deleteHandler = (indexValue) =>{
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
    const newTodos = todos.filter((todo,index) => index !== indexValue);
    setTodos(newTodos);
  }
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">TodoList App</h1>
            <form onSubmit={submitHandler}>
              <input size="30" type="text" name="task" value={task} onChange={changeHandler} /> &nbsp;&nbsp;
              <input type="submit" value="Add" name="Add"/>
            </form>
            <TodoList todolist={todos} deleteHandler={deleteHandler}/>
          </div>
        </div>
      </center>
    </div>
  )
}

export default App;