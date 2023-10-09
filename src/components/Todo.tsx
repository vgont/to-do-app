import { ChangeEvent, useState } from "react";
import  CheckCircleIcon from "@mui/icons-material/CheckCircle"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"

interface TodoProps {
    todo:{
        id: string;
        task: string;
        completed: boolean;
    }
    toggleComplete: any;
    handleDelete: any;
    handleEdit: any;
}

export default function Todo({
    todo,
    toggleComplete,
    handleDelete,
    handleEdit
}: TodoProps){

    const [newTask, setNewTask] = useState(todo.task)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        if (todo.completed === true) {
            setNewTask(todo.task);
        } else {
            todo.task = "";
            setNewTask(e.target.value);
        }
    }

    return(
        <div className="mt-5 bg-slate-200 px-3 py-5 rounded flex justify-between items-center shadow-md text-2xl">
            <input type="text" 
            style={{ textDecoration: todo.completed? "line-through": "none"}}
            value={todo.task === ""? newTask : todo.task}
            className="list"
            onChange={handleChange}
            />
            <div>
                <button className="border-0 outline-none cursor-pointer bg-transparent rounded-full m-3"
                onClick={()=> toggleComplete(todo)}>
                <CheckCircleIcon id ="i"/>
                </button>
                <button className="border-0 outline-none cursor-pointer bg-transparent rounded-full m-3"
                onClick={()=> handleEdit(todo, newTask)}>
                <EditIcon id="i"/>
                </button>
                <button className="border-0 outline-none cursor-pointer bg-transparent rounded-full m-3"
                onClick={()=> handleDelete(todo.id)}>
                <DeleteIcon id="i"/>
                </button>
            </div>
        </div>
    )
}