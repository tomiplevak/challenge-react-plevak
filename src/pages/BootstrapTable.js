import React from 'react';

import Table from 'react-bootstrap/Table';

function BootstrapTable() {
  const data = [
    {
    id: 1,
    nombre: "Pedro",
    edad: 20,
    carrera: "Ingenieria",
    hobby: "Futbol"
  },
  {
    id: 2,
    nombre: "Rodrigo",
    edad: 22,
    carrera: "Arquitectura",
    hobby: "Bajo eléctrico"
  },
  {
    id: 3,
    nombre: "Romina",
    edad: 21,
    carrera: "Abogacía",
    hobby: "Acrobacia"
  },
  {
    id: 4,
    nombre: "Ana",
    edad: 23,
    carrera: "Contadora",
    hobby: "Astronomia"
  }
]
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Carrera</th>
          <th>Hobby</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user)=>(
          <tr>
            <td>{user.id}</td>
            <td>{user.nombre}</td>
            <td>{user.edad}</td>
            <td>{user.carrera}</td>
            <td>{user.hobby}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default BootstrapTable;