const TodoNew = (props) => {
    const { addNewToDo, name } = props;

    const handleClick = () => {
        alert("Click me")
    }

    const handleOnChange = (name) => {
        console.log("handleOnchanged: ", name)
    }

    return (
        <div className='todo-new'>
            <input type="text" placeholder='Input a new work'
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button onClick={handleClick}>Add</button>
            {addNewToDo(name)}
        </div>
    )
}

export default TodoNew