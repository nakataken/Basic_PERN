import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onChangeDescription = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();

    try {
      const body = { description };

      await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <h1 className="text-center mt-5">PERN Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={onChangeDescription}
        />
        <button className="btn btn-success" type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default InputTodo;
