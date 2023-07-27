import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <div>
        <h1>my first app </h1>
        <MyButton />
    </div>
  );
}
function MyButton(){

  return(
      <button>
        button
      </button>
  );

}
export default function Myapp(){
    return(
        <div>
            <h1>my first app </h1>
            <MyButton />
        </div>
    );
}
export default App;
