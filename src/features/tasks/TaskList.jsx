import TaskCard from "./TaskCard";

const STATUS_LABELS = {
  todo: "Todo",
  "in-progress": "In Progress",
  done: "Done",
};

export default function TaskList({ tasks, status,handleStatusChange }) {
  const filteredTasks = tasks.filter(task => task.status === status);
  const title = STATUS_LABELS[status];
  const count=filteredTasks.length

  return (
    <section className="bg-gray-50 rounded-lg p-4">
      <h3 className="mb-4 flex items-center justify-between text-lg font-semibold">
          <span>{title}</span>
          <span className="rounded-full bg-gray-200 px-2 py-0.5 text-sm text-gray-700">
            {count}
          </span>
      </h3>


      {filteredTasks.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <p className="text-sm font-medium text-gray-500">
                {status === "todo" && "No tasks yet"}
                {status === "in-progress" && "Nothing in progress"}
                {status === "done" && "No completed tasks"}
              </p>
              <p className="mt-1 text-xs text-gray-400">
                {status === "todo" && "Create your first task to get started"}
                {status === "in-progress" && "Move a task here when you start working"}
                {status === "done" && "Completed tasks will appear here"}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredTasks.map(task => (
                <TaskCard
                  key={task.id}
                  task={task}
                  handleStatusChange={handleStatusChange}
                />
              ))}
            </div>
          )}

    </section>
  );
}
