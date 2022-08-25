import React, { useState } from "react";

import Form from "../components/Form";

import "./FormPage.css";

function FormPage() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    const usersList = [...users, user];
    setUsers(usersList);
  };
  return (
    <>
      <Form onSubmit={addUserHandler} />
      {users.length > 0 ? (
        <div className="users-container">
          {users.map((user) => (
            <ul className="users-list">
              <li key={user.id}>Nombre: {user.nombre}</li>
              <li key={user.id}>Edad: {user.edad}</li>
              <li key={user.id}>Carrera: {user.carrera}</li>
              <li key={user.id}>Hobby: {user.hobby}</li>
            </ul>
          ))}
        </div>
      ) : (
        <h2>Add users!</h2>
      )}
    </>
  );
}

export default FormPage;
