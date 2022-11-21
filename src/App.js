import React from "react";
import {TodoCounter} from "./TodoCounter"
import {TodoSearch} from "./TodoSearch"

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
    </React.Fragment>
  );
}

export default App;
