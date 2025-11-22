import Card from './Card.jsx'
import './App.css';
import { useEffect, useState } from 'react';


function randomHex() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}


function App() {
  
  const [toast, setToast] = useState("");
   const [palette,setPalette] = useState([
    randomHex(),
    randomHex(),
    randomHex(),
    randomHex(),
    randomHex()
  ])

  function generatePalette() {
    setPalette([
      randomHex(),
      randomHex(),
      randomHex(),
      randomHex(),
      randomHex()
    ]);
  }

  useEffect(()=>{
    function handleKeyPress(e){
      if(e.code ==="Space") generatePalette()
      if (e.key.toLowerCase() === "c") {
        navigator.clipboard.writeText(palette.join(", "));
        setToast("Palette copied!");
        setTimeout(() => setToast(""), 1500);
      }
    }

    window.addEventListener("keydown",handleKeyPress)

    return ()=>{
      window.removeEventListener("keydown",handleKeyPress)
    }
  },[palette])

  const copySingle = (hex) => {
    navigator.clipboard.writeText(hex);
    setToast(`Color ${hex} copied to your clipboard`);

    setTimeout(() => {
      setToast("");
    }, 1500);
  }


  return (

    <div>
        {toast && (<div className="toast">{toast}</div>)}
      <div className='container'>
          <h2>Color Pallet Generator</h2>
          <div className="cards">
              <Card onClick={copySingle} cocode={palette[0]}/>
              <Card onClick={copySingle} cocode={palette[1]}/>
              <Card onClick={copySingle} cocode={palette[2]}/>
              <Card onClick={copySingle} cocode={palette[3]}/>
              <Card onClick={copySingle} cocode={palette[4]}/>
          </div>

          <button onClick={generatePalette}>Genrate palette</button>
          <p className='desc'>Or just press the "Spacebar" to generate a new pallets</p>
          <p className='hint'> Click to copy individual color • Press "C" to copy palette</p>
      </div>

    </div>
  )
}

export default App
