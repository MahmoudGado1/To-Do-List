import { useRef, useState } from 'react';
import './App.css';
function App() {
  const [x , setx]= useState ([])
  const inputRef = useRef()
  const add = () =>{
    const value = inputRef.current.value
    // console.log(value)
    setx([...x,value])
    inputRef.current.value=""
  }
  return (
    <div className="App">
      <h2>to do list</h2>

      <ul>
        {
          x.map((item)=>{
            return <li>{item}</li>
          })
        }
      </ul>

      <input ref={inputRef} placeholder='enter new task...'></input>

      <button onClick={add}>Add</button>
    </div>
  );
}

export default App;
