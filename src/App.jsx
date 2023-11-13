import {Task} from "./components/Task.jsx";
import {TaskList} from "./components/TaskList.jsx";

export default function App() {
    return (
        <div className="app">
            <Task/>
            <TaskList />
        </div>
    )
}