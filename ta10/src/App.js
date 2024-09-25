import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
/*
Crear una aplicación en ReactJS, que utilizando useState y useEffect,
llame a la siguiente API (https://jsonplaceholder.typicode.com/users) 
y muestre el nombre de usuario y el mail (de manera amigable) de la respuesta que obtiene.
Dicha llamada debe hacerse sólo una vez, cuando el componente se renderice.

*/

function App() {
  const API = 'https://jsonplaceholder.typicode.com/users';
  const [users, setUsers] = useState([]);

  // useEffect para hacer la llamada a la API
  useEffect(() => {
    //Llamamos a la API
    fetch(API)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error al obtener los datos:', error));
  }, []); // El arreglo vacío asegura que la llamada se haga solo una vez.

  return (
    <div className="App">
      <header className="App-header">
      <h1>Lista de Usuarios:</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>Nombre:</strong> {user.name} <br />
              <strong>Email:</strong> {user.email}
            </li>
          ))}
        </ul>

      </header>
    </div>
  );
}

export default App;
