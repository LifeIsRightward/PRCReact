import './App.css';
import Header from './components/header';
import Slide from './components/slide';
import Introduce from './components/introduce';
import Project from './components/project';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Slide />
      <Introduce />
      <Project />
    </div>
  );
}

export default App;
