import './components/todo/todo.css'
import TodoContent from './components/todo/TodoContent'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
const App = () => {
  const name = "dontwait";
  const age = 19;
  const data = {
    address: "hcm",
    country: "vietnam"
  }

  const addNewToDo = (name) => {
    alert(`name: ${name}`)
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewToDo={addNewToDo}
        name={name}
      />
      <TodoContent
        name={name}
        age={age}
        data={data}
      />
      <div className='todo-image'>
        <img src={reactLogo} alt="" className='logo' />
      </div>
    </div>
  )
}

export default App