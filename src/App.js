import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";

function App() {

  const [solution,setSolution]=useState(null);

  useEffect(()=>{
    fetch('http://localhost:3001/solutions')
     .then((res)=>{
      return res.json();
     })
     .then((json)=>{
      //random integer between 0 to 64
      let randomSolution=json[Math.floor(Math.random()*json.length)];
      setSolution(randomSolution.word);
     })
  },[setSolution])

  return (
    <div className="app">
      <h1>WORDLE</h1>
      {solution && <Wordle solution={solution}/>}
      {/* {solution && <div>Solution - {solution}</div>} */}
    </div>
  );
}

export default App;
