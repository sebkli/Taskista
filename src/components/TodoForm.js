import React from "react";
import uuid from "react-uuid";
import { ImPlus } from "react-icons/im";

const TodoForm = ({ todoText, setTodoText, todoList, setTodoList }) => {
  const handleInput = (e) => {
    setTodoText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      {
        id: uuid(),
        text: todoText,
        completed: false,
      },
    ]);
    setTodoText("");
  };
  return (
    <div className="Todo-From">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="Todo-Input"
          onChange={handleInput}
          value={todoText}
          placeholder="My todo"
        />
        <button className="Add-btn" type="submit" onClick={handleSubmit} disabled={!todoText}>
          <ImPlus className="Add-icon" size="2rem" />
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
