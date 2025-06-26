const TodoContent = (props) => {
    //c1
    const { name, age, data, todoList } = props

    //c2
    // const name = props.name
    // const age = props.age
    // const data = props.data

    //c3
    //thay props bang key can lay vd: {name} {age}
    console.log("Check props: ", props)
    return (
        <div className='todo-content'>
            <div>My name is {JSON.stringify(data)}</div>
            <div>Learning React</div>
            <div>Learning Angular</div>
            <div>
                {JSON.stringify(todoList)}
            </div>
        </div>
    )
}

export default TodoContent