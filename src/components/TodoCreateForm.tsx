import React, { useContext, useState, useCallback } from "react";
import { AppContext } from "../models";

export const TodoCreateForm = () => {
  const { todoList } = useContext(AppContext);

  const [todoText, setTodoText] = useState<string>("");

  const handleTextChange = useCallback((e) => setTodoText(e.target.value), []);

  const addTodo = useCallback(
    (e: any) => {
      e.preventDefault();
      const text = e.target.newTodo.value.trim();
      if (text.length > 0) {
        todoList.addTodo(text);
        setTodoText("");
      }
    },
    [todoList]
  );

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={addTodo}>
        <input
          className="new-todo"
          name="newTodo"
          placeholder="What needs to be done?"
          autoFocus
          value={todoText}
          onChange={handleTextChange}
        />
      </form>
    </header>
  );
};
