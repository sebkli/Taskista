import React from "react";
import { MdOutlineDoneOutline } from "react-icons/md";
import { GiCancel } from "react-icons/gi";

const Todo = ({ text, todoList, setTodoList, todo }) => {
  const handleDelete = () => {
    setTodoList(todoList.filter((el) => el.id !== todo.id));
  };
  const handleCompleted = () => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <li className={`Todo ${todo.completed ? "Completed" : ""}`}>
      <h3>{text}</h3>
      <div className="Icons">
        <MdOutlineDoneOutline className="Completed-icon" onClick={handleCompleted} />
        <GiCancel className="Delete-icon" onClick={handleDelete} />
      </div>
    </li>
  );
};

export default Todo;
