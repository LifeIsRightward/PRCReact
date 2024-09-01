import './App.css';
import Header from './components/header';
import Slide from './components/slide';
import Introduce from './components/introduce';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Slide />
      <Introduce />
    </div>
  );
}

export default App;
