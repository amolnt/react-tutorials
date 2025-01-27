import { useEffect, useState } from "react";

const AddDeleteSelectedListItem = () => {
  const [todoInputValue, setTodoInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const addTodoInTheList = () => {
    setTodos((prevState) => [
      ...prevState,
      { id: new Date(), key: todoInputValue, isChecked: false },
    ]);
    setTodoInputValue("");
  };

  const deleteTodoItem = (id) => {
    setTodos(todos.filter((todoItem) => todoItem.id !== id));
  };

  const allowForDelete = (id) => {
    setTodos(prevState => prevState.map(todoItem => todoItem.id == id ? {...todoItem, isChecked : !todoItem.isChecked} : todoItem));
  }

  return (
    <div style={{    paddingTop: "15%", paddingLeft: "5%"}}>
      <h1>{todos.length} of Todo Items</h1>
      <input
        type="text"
        value={todoInputValue}
        onChange={(e) => setTodoInputValue(e.target.value)}
      />{" "}
      &nbsp;
      <button
        onClick={addTodoInTheList}
        disabled={todoInputValue == "" ? true : false}
      >
        Add Todo In List
      </button>
      <br />
      <br />
      <h1>Todo Lists</h1>
      {todos.length > 0 ? (
        <ol>
          {todos.map((todoItem) => (
            <>
              <div style={{ display: "flex", marginTop: "1%" }}>
                <li key={todoItem.id}>
                  <input type="checkbox" onChange={() => allowForDelete(todoItem.id)}></input>
                  {todoItem.key}
                  <button
                    onClick={() => deleteTodoItem(todoItem.id)}
                    style={
                      todoItem.isChecked
                        ? { color: "red" }
                        : {  }
                    }
                    disabled={todoItem.isChecked ? false : true}
                  >
                    Delete Todo
                  </button>
                </li>
              </div>
            </>
          ))}
        </ol>
      ) : (
        <h3>No Todo Exists In The Lists.</h3>
      )}
    </div>
  );
};

export default AddDeleteSelectedListItem;
