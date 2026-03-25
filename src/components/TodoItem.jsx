// ============================================
// 📁 src/components/TodoItem.jsx
// 🎯 Purpose: Displays a single todo with toggle & delete
// 🔹 Concepts: Props (todo, handlers), conditional className
// ============================================

function TodoItem({ todo, deleteTodo, toggleComplete }) {
  return (
    <div className={`todo-item ${todo.completed ? "todo-completed" : ""}`}>

      {/* 🔹 Left side: Checkbox + Text */}
      <div className="todo-left" onClick={() => toggleComplete(todo.id)}>

        {/* 🔹 Custom checkbox circle */}
        <span className={`todo-checkbox ${todo.completed ? "checked" : ""}`}>
          {todo.completed ? "✅" : "⭕"}
        </span>

        {/* 🔹 Todo text — adds 'completed' class if done */}
        <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
          {todo.text}
        </span>

      </div>

      {/* 🔹 Right side: Delete button */}
      <button
        className="delete-btn"
        onClick={() => deleteTodo(todo.id)}
        title="Delete this task"
      >
        🗑️ Delete
      </button>

    </div>
  );
}

export default TodoItem;
// ============================================