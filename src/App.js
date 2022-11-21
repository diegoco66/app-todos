import React from "react";
import {TodoCounter} from "./TodoCounter"
import {TodoSearch} from "./TodoSearch"
import {TodoCreatedButton} from "./TodoCreatedButton"

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoCreatedButton />
    </React.Fragment>
  );
}

export default App;
