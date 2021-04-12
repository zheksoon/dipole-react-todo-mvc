import React, { useContext } from "react";
import { observer } from "dipole-react";

import { TodoItem } from "./TodoItem";
import { AppContext } from "../models";

export const TodoListItems = observer(() => {
  const { todoList } = useContext(AppContext);

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" onClick={todoList.setAllDone}/>
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todoList.visibleTodos.map(todo => (
          <TodoItem model={todo} onDelete={todoList.removeTodo} key={todo.id}/>
        ))}
      </ul>
    </section>
  )
});
