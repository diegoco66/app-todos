import React from "react";
import {TodoCounter} from "./TodoCounter"
import {TodoSearch} from "./TodoSearch"
import {TodoCreatedButton} from "./TodoCreatedButton"
import {TodoList} from "./TodoList"
import {TodoItem} from "./TodoItem"

const todos = [
  {id: 1, text: "Comprar la lista de compras", completed: false},
  {id: 2, text: "Jugar Cities Skylines", completed: false},
  {id: 3, text: "Picar la fruta", completed: false},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {
          todos.map(todo => (
            <TodoItem key={todo.id} text={todo.text} />
          ))
        }
      </TodoList>
      <TodoCreatedButton />
    </React.Fragment>
  );
}

export default App;
