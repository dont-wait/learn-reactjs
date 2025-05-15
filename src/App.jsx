import './components/todo/todo.css'
import TodoContent from './components/todo/TodoContent'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
const App = () => {
  const dontwait = "hello"
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoContent />
      <div className='todo-image'>
        <img src={reactLogo} alt="" className='logo' />
      </div>
    </div>
  )
}

export default App