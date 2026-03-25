import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  // 🔹 State for todos
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // 🔹 State for search/filter
  const [searchTerm, setSearchTerm] = useState("");

  // 🔹 State for theme toggle
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  // 🔹 Save todos to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // 🔹 Save theme to localStorage
  useEffect(() => {
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    document.body.className = isDarkTheme ? "dark-theme" : "light-theme";
  }, [isDarkTheme]);

  // ➕ Add Todo
  const addTodo = (task) => {
    if (task.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // ❌ Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // ✅ Toggle Complete
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // ✏️ Edit Todo
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  // 🔍 Filter Todos
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 📊 Calculate Progress
  const completedCount = todos.filter((todo) => todo.completed).length;
  const progress = todos.length > 0 ? (completedCount / todos.length) * 100 : 0;

  return (
    <div className="app-wrapper">
      <Header 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        isDarkTheme={isDarkTheme} 
        setIsDarkTheme={setIsDarkTheme} 
      />

      <div className="app">
        {/* ➕ Add Todo Form */}
        <TodoForm addTodo={addTodo} />

        {/* 📊 Progress Bar */}
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="progress-text">
          {completedCount} of {todos.length} tasks completed
        </p>

        {/* 📋 Todo List */}
        <TodoList
          todos={filteredTodos}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
