import React from "react";
import "./TodoItem.css";
import { Todo } from "modules/todos";

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  return (
    <li className={`TodoItem ${todo.done ? "done" : ""}`}>
      <span className="text">{todo.text}</span>
      <span className="remove">{` ❌ `}</span>
    </li>
  );
}

export default TodoItem;
