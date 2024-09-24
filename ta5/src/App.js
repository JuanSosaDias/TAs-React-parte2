import { useState } from 'react';
import './App.css';

function App() {

  //I use an useState to show something (//First nothing appears)
  const [showText, setShowText] = useState(false); 
  
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={()=> setShowText(!showText)}><h1>Poema:</h1></button>
      {showText && <p>No te salves
No te quedes inmóvil al borde del camino
No congeles el júbilo, no quieras con desgana
No te salves ahora ni nunca, no te salves
No te llenes de calma
No reserves del mundo solo un rincón tranquilo
No dejes caer los párpados pesados como juicios
No te quedes sin labios, no te duermas sin sueño
No te pienses sin sangre, no te juzgues sin tiempo
Pero, si pese a todo no puedes evitarlo
Y congelas el júbilo y quieres con desgana
Y te salvas ahora y te llenas de calma
Y reservas del mundo solo un rincón tranquilo
Y dejas car los párpados pesados como juicios
Y te secas sin labios y te duermes sin sueño
Y te piensas sin sangre y te juzgas sin tiempo
Y te quedas inmóvil al borde del camino y te salvas
Entonces
No te quedes conmigo</p>}
      </header>
    </div>
  );
}

export default App;
