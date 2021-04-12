import React from "react";

import { TodoCreateForm } from "./TodoCreateForm";
import { TodoListFooter } from "./TodoListFilter";
import { TodoListItems } from "./TodoListItems";

export const TodoList = () => {
  return (
    <>
      <section className="todoapp">
        <TodoCreateForm />
        <TodoListItems />
        <TodoListFooter />
      </section>
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
        <p>Created by <a href="http://todomvc.com">Eugene Daragan</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </>
  );
};
TodoList.displayName = "TodoList";
