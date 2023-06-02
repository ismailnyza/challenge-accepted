import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodoTitle.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        title: newTodoTitle,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNewTodoTitle('');
    }
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
          toggleTodo={() => toggleTodo(todo.id)}
          removeTodo={() => removeTodo(todo.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
