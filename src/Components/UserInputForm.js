import React, { useState } from "react";
import "./UserInputForm.css";

function UserInputData(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  function setName(event) {
    setEnteredName(event.target.value);
  }

  function setAge(event) {
    setEnteredAge(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    if (!enteredName || !enteredAge) {
        alert("Empty Fields");
        setEnteredName('');
        setEnteredAge('');
        return;
    }
    if(+enteredAge < 0)
    {
        alert("Age cannot be negetive");
        setEnteredAge('');
        return;
    }
    const userData = { name: enteredName, age: +enteredAge, id: Math.random().toString() };
    props.onSaveData(userData);
    setEnteredName('');
    setEnteredAge('');
}
  return (
    <div>
      <form className="input-data">
        <h2><u>Form</u></h2>
        <div className="input-data__place">
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          value={enteredName}
          onChange={setName}
        />
        </div>
        <div className="input-data__place">
        <label>Age</label>
        <input
          type="number"
          min="0"
          placeholder="Age"
          value={enteredAge}
          onChange={setAge}
        />
        </div>
        <button onClick={submitHandler}>Submit</button>
      </form>
    </div>
  );
}

export default UserInputData;
