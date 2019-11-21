import React, { Fragment } from "react";
import TodoInsert from "components/TodoInsert";
import TodoList from "components/TodoList";

function App() {
  return (
    <Fragment>
      <TodoInsert />
      <TodoList />
    </Fragment>
  );
}

export default App;
