// src/TodoItem.js
import React from 'react';

function TodoItem({ todo, index, removeTodo }) {
  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
      {todo.text}
      <button onClick={() => removeTodo(index)}>Remove</button>
    </div>
  );
}

export default TodoItem;

