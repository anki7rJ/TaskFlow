import TaskCard from "./TaskCard";

const STATUS_LABELS = {
  todo: "Todo",
  "in-progress": "In Progress",
  done: "Done",
};

export default function TaskList({ tasks, status,handleStatusChange }) {
  const filteredTasks = tasks.filter(task => task.status === status);
  const title = STATUS_LABELS[status];

  return (
    <section className="bg-gray-50 rounded-lg p-4">
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>

      {filteredTasks.length === 0 ? (
        <p className="text-sm text-gray-500">No {title.toLowerCase()} tasks</p>
      ) : (
        <div className="space-y-4">
          {filteredTasks.map(task => (
            <TaskCard key={task.id} task={task} handleStatusChange={handleStatusChange} />
          ))}
        </div>
      )}
    </section>
  );
}
