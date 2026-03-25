// ============================================
// 📁 src/components/TodoList.jsx
// 🎯 Purpose: Maps over todos array and renders TodoItem for each
// 🔹 Concepts: Props (todos, handlers), .map(), key prop
// ============================================

import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleComplete }) {
  // 🔹 If no todos, show empty state message
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-icon">📭</span>
        <p className="empty-text">No tasks yet!</p>
        <p className="empty-subtext">Add your first todo above ☝️</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {/* 🔹 Map over each todo and render a TodoItem */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}               // 🔹 Unique key for React's diffing algorithm
          todo={todo}                 // 🔹 Pass single todo object as prop
          deleteTodo={deleteTodo}     // 🔹 Pass delete handler as prop
          toggleComplete={toggleComplete} // 🔹 Pass toggle handler as prop
        />
      ))}
    </div>
  );
}

export default TodoList;
// ============================================

// 🔹 Note: The actual rendering of each todo (text, buttons) is handled in TodoItem.jsx, which receives the individual todo and handlers as props.