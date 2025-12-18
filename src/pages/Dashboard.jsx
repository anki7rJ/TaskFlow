import { useState  } from "react";

import TaskList from "../features/tasks/TaskList";
import CreateTaskForm from "../features/tasks/CreateTaskForm";
import Modal from "../components/ui/Modal";





export default function Dashboard() {
  const [tasks, setTasks] = useState([
    
    
  ]);
  
  const [isFormOpen, setFormOpen] = useState(false)


  function handleCreateTask(newTask) {
    setTasks(prev => [
      ...prev,
      { 
        id:crypto.randomUUID(),
        status:"todo",
        ...newTask
       }
    ]);
  }

  function handleStatusChange(id,newStatus){
    
    setTasks(prev=>
      prev.map(task=>
        task.id===id ? {...task , status:newStatus } : task
      )
    )


  }


  return (
    <div className="flex min-h-screen bg-gray-100">
      
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-semibold">Dashboard</h1>

        <nav className="mt-6 space-y-2">
          <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-700">
            Home
          </button>
          <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-700">
            Tasks
          </button>
          <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-700">
            Settings
          </button>
        </nav>
      </aside>

      
      <main className="flex-1 p-6">
        <header className="flex items-center mb-6">
          <h2 className="text-xl font-semibold">Tasks</h2>
          <button
           className="ml-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
           onClick={()=>setFormOpen(prev=>!prev)}
           >
            {isFormOpen ? 'Close' : '+ Create Task'}
          </button>
        </header>

        {isFormOpen && (
            <Modal onClose={() => setFormOpen(false)}>
              <CreateTaskForm
                onCreateTask={(task) => {
                  handleCreateTask(task);
                  setFormOpen(false);
                }}
              />
            </Modal>
        )}



        <div className="grid grid-cols-3 gap-6">
            <TaskList tasks={tasks} handleStatusChange={handleStatusChange}  status="todo" />
            <TaskList tasks={tasks} handleStatusChange={handleStatusChange} status="in-progress" />
            <TaskList tasks={tasks} handleStatusChange={handleStatusChange} status="done" />
        </div>
        


       

        
      </main>
    </div>
  );
}
