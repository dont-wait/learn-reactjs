const TodoNew = (props) => {
    const { addNewToDo, name } = props;
    return (
        <div className='todo-new'>
            <input type="text" placeholder='Input a new work' />
            <button>Add</button>
            {addNewToDo(JSON.stringify(name))}
        </div>
    )
}

export default TodoNew