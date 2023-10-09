import { useState, useEffect } from "react";
import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { collection, query, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase"

interface TodoItem {
  id: string;
  task: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);  

  useEffect(()=>{
    const q = query(collection(db, "todos"));
    const unsub =  onSnapshot(q, (QuerySnapshot)=>{
      let todosArray: TodoItem[] = [];
      QuerySnapshot.forEach((doc)=>{
        todosArray.push({...doc.data(), id: doc.id} as TodoItem);
      });
      setTodos(todosArray);
    });
    return ()=> unsub();
  }, [])

  const handleEdit = async (todo: TodoItem, task: string) => {
    await updateDoc(doc(db, "todos", todo.id), { task: task})
  };

  const toggleComplete = async (todo:TodoItem) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed
    })
  }

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "todos", id))
  }
  return (
    <>
      <main className="flex flex-col justify-center items-center gap-20">
        <div><Title/></div>
        <div><AddTodo/></div>
        <div className="w-1/2 mx-0 my-auto">{todos.map((todo)=>(
          <Todo
          key={todo.id}
          todo={todo}
          handleEdit={handleEdit}
          toggleComplete={toggleComplete}
          handleDelete={handleDelete}
            />

        ))}</div>
     </main>
    </>
  );
}

export default App;
