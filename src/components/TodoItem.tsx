import React, { useCallback, useState } from "react";
import cx from "classnames";

import { observer } from "dipole-react";

import { TodoModel } from "../models";

interface ITodoItemProps {
  model: TodoModel;
  onDelete: (id: TodoModel["id"]) => void;
}

export const TodoItem = React.memo(
  observer(({ model, onDelete }: ITodoItemProps) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editingText, setEditingText] = useState<string>(model.text);

    const enterEditing = useCallback(() => {
      setIsEditing(true);
      setEditingText(model.text);
    }, []);

    const exitEditing = useCallback(() => setIsEditing(false), []);

    const handleKeyEvent = useCallback(
      (e: any) => {
        if (e.keyCode === 27) {
          exitEditing();
        } else if (e.keyCode === 13) {
          exitEditing();
          model.setText(editingText);
        }
      },
      [model, editingText, exitEditing]
    );

    const handleTextChange = useCallback((e) => setEditingText(e.target.value), []);

    const handleDelete = useCallback(() => onDelete(model.id), [model, onDelete]);

    return (
      <li className={cx({ completed: model.done, editing: isEditing })}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={model.done}
            onChange={model.toggleDone}
          />
          <label onDoubleClick={enterEditing}>{model.text}</label>
          <button className="destroy" onClick={handleDelete}></button>
        </div>
        <input
          className="edit"
          value={editingText}
          onChange={handleTextChange}
          onBlur={exitEditing}
          onKeyDown={handleKeyEvent}
        />
      </li>
    );
  })
);
TodoItem.displayName = "TodoItem";
