import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import './Form.css';

function Form(props) {
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [ocupationInput, setOcupationInput] = useState("");
  const [hobbyInput, setHobbyInput] = useState("");

  const nameChangeHandler = (event) => {
    setNameInput(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAgeInput(event.target.value);
  };
  const ocupationChangeHandler = (event) => {
    setOcupationInput(event.target.value);
  };
  const hobbyChangeHandler = (event) => {
    setHobbyInput(event.target.value);
  };

  const addHandler = (event) => {
    event.preventDefault();
    
    if(nameInput.length !== 0 && ageInput.length !== 0 && ocupationInput.length !== 0 && hobbyInput.length !== 0){
      const newUser = {
        id: uuidv4(),
        nombre: nameInput,
        edad: ageInput,
        carrera: ocupationInput,
        hobby: hobbyInput
      };
      props.onSubmit(newUser);
      setNameInput("");
      setAgeInput("");
      setOcupationInput("");
      setHobbyInput("");
    }
  };
  return (
    <form className="form" onSubmit={addHandler}>
      <input
        className="input"
        type="text"
        placeholder="Nombre"
        name="nombre"
        onChange={nameChangeHandler}
        value={nameInput}
      />
      <input
        className="input"
        type="text"
        placeholder="Edad"
        name="edad"
        onChange={ageChangeHandler}
        value={ageInput}
      />
      <input
        className="input"
        type="text"
        placeholder="Carrera/Oficio/Profesión"
        name="carrera"
        onChange={ocupationChangeHandler}
        value={ocupationInput}
      />
      <input
        className="input"
        type="text"
        placeholder="Hobby"
        name="hobbie"
        onChange={hobbyChangeHandler}
        value={hobbyInput}
      />
      <button className="button">Submit</button>
    </form>
  );
}

export default Form;
