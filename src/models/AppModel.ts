import React from "react";
import { TodoListModel } from "./TodoListModel";

export class AppModel {
  todoList = new TodoListModel();
}

export const AppContext = React.createContext<AppModel>(null!);
