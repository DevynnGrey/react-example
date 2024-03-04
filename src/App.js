import './App.css';
import BaseComponent from './baseComponent';
import DogBreedsComponent from './dogComponent';
import ListComponent from './listComponent';
import ClassComponent from './classComponent';
import FunctionalComponent from './functionalComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Using this project to experiment with Hooks, unit testing, and other React-specific code.
        </p>
      </header>
      <div>
        <h1>Base component using fetched API Data to render</h1>
        <BaseComponent />
      </div>
      <div>
        <h1>Component that transforms an object into an array to render</h1>
        <DogBreedsComponent />
      </div>
      <div>
        <h1>Generic List Component</h1>
        <ListComponent />
      </div>
      <div>
        <h1>Class Based React Component</h1>
        <ClassComponent />
      </div>
      <div>
        <h1>Functional Component</h1>
        <FunctionalComponent />
      </div>
    </div>
  );
}

export default App;
