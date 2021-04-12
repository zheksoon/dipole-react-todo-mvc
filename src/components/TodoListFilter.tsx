import React, { useContext } from "react";
import { observer } from "dipole-react";
import cx from "classnames";

import { AppContext, TodoListFilterEnum, TodoListModel } from "../models";

const todoListFilterMapping = [
  { text: "All", value: TodoListFilterEnum.ALL },
  { text: "Active", value: TodoListFilterEnum.UNDONE },
  { text: "Completed", value: TodoListFilterEnum.DONE },
];

export const TodoListFooter = observer(() => {
  const { todoList } = useContext(AppContext);

  if (todoList.todos.length == 0) {
    return null;
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todoList.undoneCount}</strong> item left
      </span>
      <ul className="filters">
        {todoListFilterMapping.map(({ text, value }) => (
          <li key={value}>
            <a
              className={cx(todoList.filter == value && "selected")}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                todoList.setFilter(value);
              }}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
      {todoList.doneCount > 0 && (
        <button className="clear-completed" onClick={todoList.clearDone}>
          Clear completed
        </button>
      )}
    </footer>
  );
});
TodoListFooter.displayName = "TodoListFooter";
