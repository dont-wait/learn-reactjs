import './components/todo/todo.css'
import TodoContent from './components/todo/TodoContent'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
const App = () => {
  
  const [todoList, setTodoList] = useState([
  ]);


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
      />
      <TodoContent
        todoList={todoList}
      />
      <div className='todo-image'>
        <img src={reactLogo} alt="" className='logo' />
      </div>
    </div>
  )
}

export default App