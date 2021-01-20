import './App.css';
import {useState} from 'react'

function App() {
  const [Weight, setWeight] = useState(0);
  const [Height, setHeight] = useState(0);
  const [Bmi, setBmi] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const ans = Weight/(Height*Height);
    setBmi(ans);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h3>Calculate body mass index</h3>
        <div>
          <label>Height</label>
          <input type='number' value={Height} onChange={e => setHeight(e.target.value)}></input>
        </div>
        <div>
          <label>Weight</label>
          <input type='number' value={Weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
          <output>{Bmi.toFixed(1)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
