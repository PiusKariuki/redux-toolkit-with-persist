import {useDispatch, useSelector} from "react-redux";
import {deleteTask} from "../redux/slices/task.js";


export const TaskList = () => {
    const tasks = useSelector(state => state.tasks.tasks)
    console.log('tasks', tasks)

    const dispatch = useDispatch()

    const handleDelete = id => {
        dispatch(deleteTask(id))
    }

    return (
        <div className="tasklist">
            <div className="display-tasks">
                <h3>Your tasks:</h3>
                <ul className="tasks">
                    {
                        tasks.length>0 && tasks?.map(task =>(
                            <li key={task.id} className="task">
                                {task.text}
                                <button onClick={()=>handleDelete(task.id)} className="delete-btn">delete</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}