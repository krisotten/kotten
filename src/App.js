// CSS Module
import styles from './App.module.css';

// Pages
import Home from './pages/home/home.js';

// Components
import Root from './components/Root/Root.js';
import ItemDetails from './components/ItemDetails/ItemDetails.js';

// React Router
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root /> }>
    <Route index element={ <Home />} />
  </Route>
));

function App() {
  return (
    <>
      <RouterProvider router={ appRouter } />
    </>
  );
}

export default App;
