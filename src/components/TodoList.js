import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <div className="Todo-list">
      {todoList.map((todo) => (
        <Todo
          key={todo.id}
          text={todo.text}
          todoList={todoList}
          setTodoList={setTodoList}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
