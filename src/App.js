import './App.css';

import Navigation from './components/Navigation/Navigation.js';
import Footer from './components/Footer/Footer.js';
import ItemList from './components/ItemList/ItemList.js';
import Item from './components/Item/Item.js';

import evilEye from "./img/evil_eye.jpg";

function App() {
  const list = [{name: 'Swirl Crochet Mini Bag', price: "$39.99", src: evilEye}, {name: 'Swirl Crochet Mini Bag', price: "$39.99", src: "./img/brown.jpg"}, {name: 'Swirl Crochet Mini Bag', price: "$39.99", src: "./img/strawberry.jpg"},
  {name: 'Swirl Crochet Mini Bag', price: "$39.99", src: "./img/mushroom.jpg"}, {name: 'Swirl Crochet Mini Bag', price: "$39.99", src: "./img/skull.jpg"}
  ];

  return (
    <>
      <Navigation />
      {/* <Item name="Swirl" price="$39.99" src={evilEye}/> */}
      <ItemList list={list} />
      <Footer />
    </>
  );
}

export default App;
