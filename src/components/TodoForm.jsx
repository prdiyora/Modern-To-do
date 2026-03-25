// ============================================
// 📁 src/components/TodoForm.jsx
// 🎯 Purpose: Input field + Add button to create todos
// 🔹 Concepts: useState (local state), Props (addTodo from parent)
// ============================================

import { useState } from "react";

function TodoForm({ addTodo }) {
  // 🔹 LOCAL state — only this component needs the input value
  const [inputValue, setInputValue] = useState("");

  // 🔹 Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // 🔹 Call parent's addTodo function (received via PROPS)
    addTodo(inputValue);

    // 🔹 Clear input after adding
    setInputValue("");
  };

  return (
    // 🔹 Using <form> so Enter key also submits!
    <form className="todo-container" onSubmit={handleSubmit}>

      {/* 🔹 Input Field */}
      <input
        type="text"
        placeholder="🖊️ Write your task here..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {/* 🔹 Add Button */}
      <button type="submit">
        <span className="btn-icon">➕</span>
        <span className="btn-text">Add</span>
      </button>

    </form>
  );
}

export default TodoForm;
