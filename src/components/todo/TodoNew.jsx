import { useState } from "react";

const TodoNew = (props) => {

    //useState hook
    //const valueInput = "";
    const [valueInput, setValueInput] = useState(""); //default value is empty string

    const { addNewToDo, name } = props;

    const handleClick = () => {
        console.log(`valueInput: ${valueInput}`);
    }

    const handleOnChange = (name) => {
        setValueInput(name);
    }

    return (
        <div className='todo-new'>
            <input type="text" placeholder='Input a new work'
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button onClick={handleClick}>Add</button>
            {addNewToDo(name)}

            <div>My text input is: {valueInput}</div>

        </div>
    )
}

export default TodoNew