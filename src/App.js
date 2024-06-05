

// CSS Module
import styles from './App.module.css';

// Pages
import Home from './pages/home/home.js';
import Cart from './pages/cart/cart.js';
import Shipping from './pages/shipping/shipping.js';
import Search from './pages/search/search.js';

// Components
import {Root} from './components/Root/Root.js';
import ItemDetails from './components/ItemDetails/ItemDetails.js';

import {CartTracker} from './context/CartContext.js';

// React Router
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, useContext } from 'react-router-dom';

const appRouter = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={ <Root /> }>
        <Route index element={ <Home />} />
        <Route path=":name" element={ <ItemDetails />} />
        <Route path="cart" element={ <Cart /> } />
        <Route path="shipping" element={ <Shipping /> } />
        <Route path="search" element={ <Search /> } />
      </Route>
));

function App() {
  return (
    <>
    <CartTracker>
      <RouterProvider router={ appRouter } />
    </CartTracker>
    </>
  );
}

export default App;
