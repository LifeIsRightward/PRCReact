import './App.css';
import Header from './components/header';
import Slide from './components/slide';
import Introduce from './components/introduce';
import Product from './components/product';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Slide />
      <Introduce />
      <Product />
    </div>
  );
}

export default App;
