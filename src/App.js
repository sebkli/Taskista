import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {
  const [todoList, setTodoList] = useState(
    localStorage.todoList ? JSON.parse(localStorage.todoList) : []
  );
  const [todoText, setTodoText] = useState("");
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <div className="App">
      <h1>PLAN FOR TODAY</h1>
      <TodoForm
        todoText={todoText}
        setTodoText={setTodoText}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
