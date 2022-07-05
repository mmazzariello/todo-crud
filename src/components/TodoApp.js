import { useState } from "react";

export default function TodoApp() {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
    console.log(e.target.value);
  };

  return (
    <div className="todoContainer">
      <form className="todoCreateForm">
        <input onChange={handleChange} className="todoInput" value={title} />
        <input
          onClick={handleSubmit}
          type="submit"
          value="Create todo"
          className="buttonCreate"
        />
      </form>
    </div>
  );
}
