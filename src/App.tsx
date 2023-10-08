import { ChangeEvent, useCallback, useState } from 'react'
import { CgTrash } from 'react-icons/cg'
function App() {

  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    setNewTask('');
  }

  const handleNewTaskChange = (e: ChangeEvent<HTMLInputElement>)=> {
    setNewTask(e.target.value);
  }

  const hasTask = tasks.find(task => task==newTask)
  
  const handleNewTaskSubmit = ()=> {
    if(newTask === ''){
      alert("You didn't add a task yet!")
      return
    }
    if(hasTask){
      alert("You have this task already!")
      return
    }
    setTasks([...tasks, newTask])
  }

  const handleDeleteTask = useCallback((taskToDelete: string) => {
    const find = tasks.filter(task => task !== taskToDelete);
    setTasks(find) 
  }, [tasks])

  return (
    <>
     <main className='flex flex-col justify-center items-center gap-20'>
        <h1 className='mt-10 mb-4 text-4xl font-semibold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center'>To-Do List</h1>
          <form onSubmit={handleSubmit} className='flex flex-row gap-10 w-2/4 items-center justify-center'>
          <input type="text" 
          className='w-2/3 bg-gray-50 border border-gray-500 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 '
          placeholder='Enter a new task'
          onChange={handleNewTaskChange}
          value={newTask}
          />
          <button 
          type='submit' 
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg sm:text-xl text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          onClick={handleNewTaskSubmit}>Add new task</button>
          </form>
          <ul>
            {tasks.map((task: string)=> (
              <li key={task} className='p-4 flex flex-row items-center justify-between text-xl'>
                {task}
                <button className='pl-10' onClick={()=> confirm('Deseja deletar?')? handleDeleteTask(task) : null}><CgTrash/></button>
              </li>
            ))}
          </ul>
     </main>
    </>
  )
}

export default App
