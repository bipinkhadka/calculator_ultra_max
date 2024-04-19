import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import * as ReactDOM from 'react-dom';
const result = null
function App() {
  const [result, setResult] = useState(null)
  const [resultStack, setResultStack] = useState([0])

  // our main operate function
  // 
  const operate= (button)=>{
    
    const buttonClass = button.className

    const stack = []
    //const result = this.result
    
    if(buttonClass === 'data-number'){
        const digit = parseInt(button.innerText)
        stack.push(digit)

    }

   if(buttonClass === 'data-operation'){
    stack.push(button.innerText)
   }
  
  
  
  
  }
  
  return (
    <div className="App">
      <div id='calculator'>
        <div id="display-panel">

        </div>

          <div id="btn-box" className="signika-negative-calc">
            

             <button className="data-operation" id="percent-operation" onClick={(e)=>operate(e.target)}>%</button>
             <button className="data-operation" id="clear-operation">c</button>
             <button className="data-operation" id="arrow-operation">→</button>
             <button className="data-operation" id="divison-operation">÷</button>
             

            <button className="data-number" onClick={(e)=>operate(e.target)}>7</button>
            <button className="data-number">8</button>
            <button className="data-number">9</button>
             
            <button className="data-operation" id="multiply-operation">X</button>
            
            <button className="data-number">4</button>
            <button className="data-number">5</button>
            <button className="data-number">6</button>

            <button className="data-operation" id="minus-operation">-</button>

            <button className="data-number">1</button>
            <button className="data-number">2</button>
            <button className="data-number">3</button>
            <button className="data-operation" id="plus-operation">+</button>

            <button className="data-sign" id="sign-operation">+/-</button>
            <button className="data-number">0</button>
            <button className="data-decimal" id="decimal-operation">.</button>
            <button className="data-result" id="result-operation">=</button>
          </div>       
      </div>
    </div>
  );
}

export default App;
