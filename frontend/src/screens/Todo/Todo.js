import { useEffect, useState } from "react";
import "./Todo.css";
import MainScreen from "../../components/MainScreen";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

//const api_base = "http://localhost:3001";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    GetTodos();
  }, []);

  const GetTodos = () => {
    fetch("http://127.0.0.1:3000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error("Error: ", err));
  };

  const completeTodo = async (event, id) => {
    const data = await fetch("http://127.0.0.1:3000/todo/complete/" + id).then(
      (res) => res.json()
    );

    setTodos((todos) =>
      todos.map((todo) => {
        if (todo._id === data._id) {
          return { ...todo, completed: event.target.checked };
        }

        return todo;
      })
    );
  };

  const addTodo = async () => {
    const data = await fetch("http://127.0.0.1:3000/todo/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: newTodo,
      }),
    }).then((res) => res.json());

    setTodos([...todos, data]);

    setPopupActive(false);
    setNewTodo("");
  };

  const deleteTodo = async (id) => {
    const data = await fetch("http://127.0.0.1:3000/todo/delete/" + id, {
      method: "DELETE",
    }).then((res) => res.json());

    setTodos((todos) => todos.filter((todo) => todo._id !== data.result._id));
  };

  return (
    <MainScreen title={`Welcome ${userInfo.name} to Homework Management..`}>
      <div className="todo-list">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <div className="todo-item" key={todo._id}>
              <input
                className="todo-checkbox"
                type="checkbox"
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onChange={(event) => completeTodo(event, todo.id)}
              />
              <label
                className={`todo-label ${todo.completed ? "completed" : ""}`}
                htmlFor={`todo-${todo.id}`}
                style={todo.completed ? { textDecoration: "line-through" } : {}}
              >
                {todo.text}
              </label>

              <button
                className="delete-button"
                onClick={() => deleteTodo(todo._id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))
        ) : (
          <p>You currently have no tasks</p>
        )}
      </div>

      <div className="addPopup" onClick={() => setPopupActive(true)}>
        +
      </div>

      {popupActive ? (
        <div className="popup">
          <div className="closePopup" onClick={() => setPopupActive(false)}>
            X
          </div>
          <div className="content">
            <h3>Add Task</h3>
            <input
              type="text"
              className="add-todo-input"
              onChange={(e) => setNewTodo(e.target.value)}
              value={newTodo}
            />
            <div className="button" onClick={addTodo}>
              Create Task
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </MainScreen>
  );
}

export default Todo;
