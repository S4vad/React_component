import keyConceptsImage from './assets/images/key-concepts.png';
import CreateArea from "./components/CreateArea"



function App() {
  return (
    <div>
      <header>
        <img src={keyConceptsImage} alt="Medal badge with a star" />
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
      </header>
      <CreateArea />
    </div>
  );
}

export default App;
