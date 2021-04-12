import React from "react";
import { observable, computed, action, makeObservable } from "dipole";

import { TodoModel } from "./TodoModel";

export enum TodoListFilterEnum {
  ALL = "ALL",
  DONE = "DONE",
  UNDONE = "UNDONE",
}

export class TodoListModel {
  todos = observable.prop<TodoModel[]>([]);
  filter = observable.prop<TodoListFilterEnum>(TodoListFilterEnum.ALL);

  doneTodos = computed.prop(() => {
    return this.todos.filter((todo) => todo.done);
  });

  undoneTodos = computed.prop(() => {
    return this.todos.filter((todo) => !todo.done);
  });

  visibleTodos = computed.prop(() => {
    switch (this.filter) {
      case TodoListFilterEnum.ALL:
        return this.todos;
      case TodoListFilterEnum.DONE:
        return this.doneTodos;
      case TodoListFilterEnum.UNDONE:
        return this.undoneTodos;
    }
  });

  undoneCount = computed.prop(() => {
    return this.undoneTodos.length;
  });

  doneCount = computed.prop(() => {
    return this.doneTodos.length;
  });

  constructor() {
    makeObservable(this);
  }

  addTodo = action((text: string) => {
    const todo = new TodoModel(text);
    this.todos.push(todo);
    this.todos = this.todos;
  });

  removeTodo = action((id: number) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  });

  setFilter = action((filter: string) => {
    this.filter = filter as any;
  });

  clearDone = action(() => {
    this.todos = this.undoneTodos;
  });

  setAllDone = action(() => {
    this.todos.forEach((todo) => (todo.done = true));
  });
}
