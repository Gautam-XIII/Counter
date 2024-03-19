import {useRef} from "react";

function App() {

  // use for simlpe javascript
  // let Number = 0;

  // const addValue = () => {
  //   Number = Number + 1;
  //   document.getElementById("output").innerHTML = Number;
  // };

  // const removeValue = () => {
  //   Number = Number - 1;
  //   document.getElementById("output").innerHTML = Number;
  // };


  // Using React useRef()
  const counter = useRef();

  const addValue = () => {
    const last = parseInt(counter.current.innerHTML);
    counter.current.innerHTML = last + 1;
  }

  const removeValue = () => {
    const last = parseInt(counter.current.innerHTML);
    counter.current.innerHTML = last - 1;
  }

  return (
    <>
      {/* <div>
        <h2 id="output"> {Number} </h2>
        <button onClick={addValue}>Add</button>
        <button onClick={removeValue}>Remove</button>
      </div> */}

      <div>
      <h2 ref={counter}> 0 </h2>
      <button  onClick={() => addValue()}>Add</button>
      <button  onClick={() => removeValue()}>Remove</button>
      </div>
    </>
  );
}

export default App;
