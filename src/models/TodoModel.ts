import { observable, action, makeObservable } from "dipole";

let todoId = 1;

export class TodoModel {
  id: number;
  text: string;
  done: boolean;

  constructor(text: string) {
    this.id = todoId++;
    this.text = observable.prop(text);
    this.done = observable.prop(false);
    makeObservable(this);
  }

  setText = action((text: string) => {
    this.text = text;
  });

  toggleDone = action(() => {
    this.done = !this.done;
  });
}
