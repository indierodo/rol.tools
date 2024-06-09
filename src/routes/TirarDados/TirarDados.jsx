import React from 'react';
import { useState } from 'react';
import './TirarDados.scss'

function TirarDados() {
  const [numDice, setNumDice] = useState(1);
  const [minimumToPass, setMinimumToPass] = useState(10);
  const [dx, setDx] = useState(20);
  const [modifier, setModifier] = useState('none')
  const [resultsComponent, setResultsComponent] = useState()

  const handleModifierChange = (event) => {
    setModifier(event.target.value);
  };

  const handleRollDice = () => {
    let succesfulThrows = [];
    let failedThrows = [];

    for (let i = 0; i < numDice; i++) {
      let roll1 = Math.floor(Math.random() * dx) + 1;
      let roll2 = Math.floor(Math.random() * dx) + 1;

      if (modifier === 'none') {
        if (roll1 >= minimumToPass) {
          succesfulThrows.push(roll1)
        } else {
          failedThrows.push(roll1)
        }
      } 
      
      else if (modifier === 'advantage') {
        const highestRoll = Math.max(roll1, roll2);

        if (highestRoll >= minimumToPass) {
          succesfulThrows.push(highestRoll)          
        } else {
          failedThrows.push(highestRoll)
        }

      } 
      
      else if (modifier === 'disadvantage') {
        const lowestRoll = Math.min(roll1, roll2);

        if (lowestRoll >= minimumToPass) {
          succesfulThrows.push(lowestRoll)   
        } else {
          failedThrows.push(lowestRoll)
        }
      }
    }

    let total = failedThrows.reduce((a, b) => a + b, 0) 
              + succesfulThrows.reduce((a, b) => a + b, 0)

    let results = [];

    results.push(
      <p>Fallos: {failedThrows.length}</p>
    );

    for (let i=0; i < failedThrows.length; i++) {
      results.push(
        <img src={`images/d${dx}/dice${failedThrows[i]}.png`} alt={`d${dx} dice${failedThrows[i]}`}/>
      );
    }

    results.push(
      <p>Aciertos: {succesfulThrows.length}</p>
    );

    for (let i=0; i < succesfulThrows.length; i++) {
      results.push(
        <img src={`images/d${dx}/dice${succesfulThrows[i]}.png`} alt={`d${dx} dice${succesfulThrows[i]}`}/>
      );
    }

    results.push(
      <p>Suma: {total}</p>
    )

    setResultsComponent(results)
  };

  return (
    <>
  <div className='tirar-dados'><div className='container'>
    <h1>Tirar dados!</h1>
  <form>
    <div className='form-group'>
      <label htmlFor="armClass">Mínimo a superar:</label>
      <input type="number" className='text-input' id="armClass" min="1" max="20" value={minimumToPass} onChange={(e) => setMinimumToPass(e.target.value)} />
    </div>

    <div className='form-group'>
      <label htmlFor="numDice">Número de dados:</label>
      <input type="number" className='text-input' id="numDice" min="1" max="200" value={numDice} onChange={(e) => setNumDice(e.target.value)} />
    </div>


    <div className='form-group'>
      <label htmlFor="dx">Número de caras:</label>
      <select className='text-input' id="dx" defaultValue="20" onChange={(e) => setDx(e.target.value)}>
        <option value="4">d4</option>
        <option value="6">d6</option>
        <option value="8">d8</option>
        <option value="10">d10</option>
        <option value="12">d12</option>
        <option value="20">d20</option>
      </select>
    </div>

    
      
      <div className='radio-group'>
      
      <label className='option'>Natural
        <input className='hideme' type="radio" id="modificador" name="modificador" value="none"
        checked={modifier === 'none'}
        onChange={handleModifierChange}>

        </input>
        <span className="radio"></span>
      </label>

      <label className='option'>Ventaja
        <input className='hideme' type="radio" id="modificador" name="modificador" value="advantage" 
        checked={modifier === 'advantage'}
        onChange={handleModifierChange}
        ></input>
        <span className="radio"></span>
      </label>

      <label className='option'>Desventaja
        <input className='hideme' type="radio" id="modificador" name="modificador" value="disadvantage"
        
        checked={modifier === 'disadvantage'}
        onChange={handleModifierChange}>

        </input>
        <span className="radio"></span>
      </label>

      </div>
    <div className='spacer'></div>

    <div className='form-group'>
      <button type="button" className='btn btn-primary' onClick={handleRollDice}>Tirar</button>
    </div>

    <div className='results'>
      {resultsComponent}
    </div>
  </form> 
  </div>
    
  </div>
</>

  );
}

export default TirarDados;
