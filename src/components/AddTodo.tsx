import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";


export default function AddTodo(){
    const [task, setTask] = useState("");

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
        if (task !=="") {
            try {
                await addDoc(collection (db, "todos"), {
                  task,
                  completed: false,
                });
                setTask("");
              } catch (error) {
                console.error("Error adding document: ", error);
              }
        }
    };

    return(
            <form onSubmit={handleSubmit} className="flex flex-row gap-10 w-2/4 items-center justify-center">
                <input
                type="text"
                placeholder="Enter a new task"
                value={task}
                onChange={(e)=> setTask(e.target.value)}
                className="min-w-fit bg-gray-50 border border-gray-500 text-gray-900 sm:text-xl text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"/>
                <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg sm:text-xl text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                Add
              </button>
            </form>
    )
}
