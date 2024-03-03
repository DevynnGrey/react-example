import './App.css';
import BaseComponent from './baseComponent';
import DogBreedsComponent from './dogComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Using this project to experiment with Hooks, unit testing, and other React-specific code.
        </p>
      </header>
      <p>
        <BaseComponent />
      </p>
      <p>
      <DogBreedsComponent />
      </p>
    </div>
  );
}

export default App;
