import React from 'react';

const TodoItem = ({
  id,
  title,
  description,
  label,
  completed,
  toggleTodo,
  removeTodo,
  time
}) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span>{title}</span>
      <span>{description}</span>
      <span>{label}</span>
      <span>{time}</span>
      <button onClick={() => removeTodo(id)}>Remove</button>
    </div>
  );
};

export default TodoItem;
