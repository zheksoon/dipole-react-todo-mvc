import React, { useMemo } from "react";

import "./App.css";

import { AppContext, AppModel } from "./models";
import { TodoList } from "./components/TodoList";

const App = () => {
  const appModel = useMemo(() => new AppModel(), []);

  return (
    <AppContext.Provider value={appModel}>
      <TodoList />
    </AppContext.Provider>
  );
};

export default App;
