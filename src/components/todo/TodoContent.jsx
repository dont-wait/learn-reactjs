const TodoContent = (props) => {
    const { todoList, deleteTodo } = props
    //ko dat index lam key, do khi CRUD, key phai tu render lai, hieu nang giam
    
    const handleClick = (id) => {
        deleteTodo(id);
    }
    
    return (
        <div className='todo-content'>
            {todoList.map((item, index) => {
                console.log("Check item: ", item, index)
                return (
                    <div className="todo-item" key={item.id}> 
                        {item.name}
                        <button onClick={() => handleClick(item.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoContent