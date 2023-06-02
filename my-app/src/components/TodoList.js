import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoDescription, setNewTodoDescription] = useState('');
  const [newTodoLabel, setNewTodoLabel] = useState('');
  const [newTodoTime, setNewTodoTime] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodoTitle.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        title: newTodoTitle,
        description: newTodoDescription,
        label: newTodoLabel,
        time: newTodoTime,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNewTodoTitle('');
      setNewTodoDescription('');
      setNewTodoLabel('');
      setNewTodoTime('');
    }
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const sortByTime = () => {
    const sortedTodos = [...todos].sort((a, b) => a.time.localeCompare(b.time));
    setTodos(sortedTodos);
  };

  const sortByLabel = () => {
    const sortedTodos = [...todos].sort((a, b) => a.label.localeCompare(b.label));
    setTodos(sortedTodos);
  };

  const sortByDescription = () => {
    const sortedTodos = [...todos].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
    setTodos(sortedTodos);
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
        <input
          type="text"
          value={newTodoDescription}
          onChange={(e) => setNewTodoDescription(e.target.value)}
          placeholder="Enter the description"
        />
        <input
          type="text"
          value={newTodoLabel}
          onChange={(e) => setNewTodoLabel(e.target.value)}
          placeholder="Enter the label"
        />
        <br />
        <input
          type="time"
          value={newTodoTime}
          onChange={(e) => setNewTodoTime(e.target.value)}
          placeholder="Enter the due time"
        />

        <br />
        <button type="button" onClick={sortByTime}>
          Sort by Time
        </button>
        <button type="button" onClick={sortByLabel}>
          Sort by Label
        </button>
        <button type="button" onClick={sortByDescription}>
          Sort by Description
        </button>
        <br />

        <button type="submit">Add Todo</button>
      </form>
      <p>Total Todos: {todos.length}</p>
      {todos.map((todo) => (
        <TodoItem
        key={todo.id}
        id={todo.id}
        title={todo.title}
        description={todo.description}
        label={todo.label}
        time={todo.time}
        completed={todo.completed}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      />
      
      ))}
    </div>
  );
};

export default TodoList;
