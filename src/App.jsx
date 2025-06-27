import './components/todo/todo.css'
import TodoContent from './components/todo/TodoContent'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
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

  const deleteTodo = (id) => {
    const newTodoList = todoList.filter(item => item.id !== id);
    setTodoList(newTodoList);
  }

  // Util
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew
          addNewToDo={addNewToDo}
        />

        {todoList.length > 0 ?
          <TodoContent
            todoList={todoList}
            deleteTodo={deleteTodo}
          />
          :
          <div className='todo-image'>
            <img src={reactLogo} alt="" className='logo' />
          </div>
        }
      </div>
      <Footer />
    </>
  )
}

export default App