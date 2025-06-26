const TodoContent = (props) => {
    const { todoList } = props
    //ko dat index lam key, do khi CRUD, key phai tu render lai, hieu nang giam
    return (
        <div className='todo-content'>
            {todoList.map((item, index) => {
                console.log("Check item: ", item, index)
                return (
                    <div className="todo-item" key={item.id}> 
                        {item.name}
                        <button>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoContent