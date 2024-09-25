import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

/*
TA 11
Crear una aplicación en ReactJS que muestre un temporizador que se incremente automáticamente
cada segundo utilizando useEffect, y muestre dicho valor en pantalla.
Tome las precauciones necesarias para que, cuando el componente sea desmontado,
dicho temporizador no quede corriendo.
*/
function App() {
  // Almacenamos segundos
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []); // Arreglo vacío para que el efecto se ejecute solo al montar

  return (
    <div className="App">
      <header className="App-header">
        <h3>Temporizador</h3>
        <p>Segundos: {seconds}</p>
      </header>
    </div>
  );
}

export default App;
