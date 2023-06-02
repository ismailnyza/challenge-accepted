import React from 'react';

const TodoItem = ({ title, completed, toggleTodo, removeTodo }) => {
  return (
    <div>
      <input type="checkbox" checked={completed} onChange={toggleTodo} />
      <span>{title}</span>
      <button onClick={removeTodo}>Remove</button>
    </div>
  );
};

export default TodoItem;
