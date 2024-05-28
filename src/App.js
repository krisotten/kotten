import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Footer from './components/Footer/Footer.js';
import Item from './components/Item/Item.js';

function App() {
  return (
    <>
      <Navigation />
      <Item name="Swirl Crochet Mini Bag" price="$39.99" />
      <Footer />
    </>
  );
}

export default App;
