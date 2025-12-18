import { useState,useEffect, useRef } from "react";

export default function CreateTaskForm({ onCreateTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const titleInputRef = useRef(null)

  useEffect(() => {
      titleInputRef.current?.focus();
  }, []);

  



  


  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) return;

    onCreateTask({
      title,
      description,
      status: "todo",
    });

    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" >
      <input
        ref={titleInputRef}
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full rounded border px-3 py-2"
      />

      <textarea
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full rounded border px-3 py-2"
      />

      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={title.trim().length===0}
      >
        Create Task
      </button>
    </form>
  );
}
