import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTask} from "../redux/slices/task.js";

export const Task = () => {
    const [text, setText] = useState("")

    const dispatch = useDispatch()

    const addNewTask = () => {
        if (text)
            dispatch(addTask(text))
        setText("")
    }


    return (
        <div className="task-component">
            <div className="add-task">
                <input
                    value={text}
                    onChange={evt => setText(evt.target.value)}
                    placeholder="Add task here.."
                    className="taskInput"
                    type="text"/>
                <button onClick={addNewTask}>Add task</button>
            </div>
        </div>
    )
}