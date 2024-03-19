function App() {

  let Number = 0;

  const addValue = () => {
    Number = Number + 1;
    document.getElementById("output").innerHTML =  Number;
  }

  const removeValue = () => {
    Number = Number - 1;
    document.getElementById("output").innerHTML =  Number;  
  }

  return (
    <>
      <h2 id="output"> {Number} </h2>
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>Remove</button>
    </>
  );
}

export default App;
