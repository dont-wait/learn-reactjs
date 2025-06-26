const TodoContent = (props) => {
    //c1
    const { todoList } = props

    
    console.log("Check props: ", props)
    return (
        <div className='todo-content'>
            {todoList.map((item, index) => {
                console.log("Check item: ", item, index)
                return (
                    <div className="todo-item">
                        {item.name}
                        <button>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoContent