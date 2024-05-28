import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Footer from './components/Footer/Footer.js';
import ItemList from './components/ItemList/ItemList.js';

function App() {
  const list = [{name: 'Swirl Crochet Mini Bag', price: "$39.99"}, {name: 'Swirl Crochet Mini Bag', price: "$39.99"}, {name: 'Swirl Crochet Mini Bag', price: "$39.99"},
  {name: 'Swirl Crochet Mini Bag', price: "$39.99"}, {name: 'Swirl Crochet Mini Bag', price: "$39.99"}, {name: 'Swirl Crochet Mini Bag', price: "$39.99"}
  ];

  return (
    <>
      <Navigation />
      <ItemList list={list} />
      <Footer />
    </>
  );
}

export default App;
