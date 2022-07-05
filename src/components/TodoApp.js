import { useState } from "react";
import Todo from "./Todo";

const TodoApp = () => {
  const [title, setTitle] = useState("");
  const [allTodos, setAllTodos] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    const temp = [...allTodos];
    temp.unshift(newTodo);

    setAllTodos(temp);
  };

  const handleUpdate = (id, value) => {
    const temp = [...allTodos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setAllTodos(temp);
  };

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} className="todoInput" value={title} />
        <input
          onClick={handleSubmit}
          type="submit"
          value="Create todo"
          className="buttonCreate"
        />
      </form>

      <div className="todosContainer">
        {allTodos.map((item) => (
          <Todo key={item.id} item={item} onUpdate={handleUpdate} />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
