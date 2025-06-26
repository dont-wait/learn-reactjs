import { useState } from "react";

const TodoNew = (props) => {

    //useState hook
    //const valueInput = "";
    const [valueInput, setValueInput] = useState("dontwait"); //default value is empty string

    const { addNewToDo } = props;

    const handleClick = () => {
        addNewToDo(valueInput);
        setValueInput(""); //reset input value after adding
    }

    const handleOnChange = (name) => {
        setValueInput(name);
    }

    return (
        <div className='todo-new'>
            <input type="text" placeholder='Input a new work'
                onChange={(event) => handleOnChange(event.target.value)}
                value={valueInput} //controlled component
            />
            <button onClick={handleClick}>Add</button>
            {addNewToDo}

            <div>My text input is: {valueInput}</div>

        </div>
    )
}

export default TodoNew