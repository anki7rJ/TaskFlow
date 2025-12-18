

export default function TaskCard({ task , handleStatusChange }) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm">
      <h3 className="font-semibold">{task.title}</h3>
      <p className="text-sm text-gray-600">{task.description}</p>
      <div className="mt-3 flex gap-2">
        {task.status==="todo" && (
          <>
          <button
            onClick={() => handleStatusChange(task.id ,"in-progress")}
            className="rounded bg-yellow-500 px-2 py-1 text-sm"
          >
            In Progress
          </button>
          <button
            onClick={()=>handleStatusChange(task.id,"done")}
            className="rounded bg-blue-500 px-2 py-1 text-sm text-white"
          >
            Done
          </button>
          
          </>
        )}

        {task.status==="in-progress" && (
          <button 
            onClick={()=>handleStatusChange(task.id ,"done")}
            className="rounded bg-blue-500 px-2 py-1 text-sm text-white"
          >
            Done
          </button>
        )}

        {task.status==="done" && (
          <>
            <span className="text-sm font-medium text-green-600"> ✔ Completed </span>
            <button onClick={()=>handleStatusChange(task.id ,"todo")} className="rounded bg-amber-500 px-2 py-1 text-sm text-white">Reopen</button>
          </>
            
            
          )}

      </div>
    </div>
  );
}
