import './components/todo/todo.css'
import TodoContent from './components/todo/TodoContent'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
const App = () => {
  
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learn React"},
    { id: 2, name: "Build a Todo App"}
  ]);

  const name = "dontwait";
  const age = 19;
  const data = {
    address: "hcm",
    country: "vietnam"
  }

  const addNewToDo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(3, 100),
      name: name
    }
    setTodoList([...todoList, newTodo])
  }

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewToDo={addNewToDo}
        name={name}
        data={data}
      />
      <TodoContent
        name={name}
        age={age}
        data={data}
        todoList={todoList}
      />
      <div className='todo-image'>
        <img src={reactLogo} alt="" className='logo' />
      </div>
    </div>
  )
}

export default App