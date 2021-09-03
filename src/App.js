import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Overview from './pages/Overview';
import Collection from './pages/Collection';
import Product from './pages/Product';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Overview />
        </Route>
        <Route path='/shirts/:name'>
          <Product />
        </Route>
        <Route path='/collections/:name'>
          <Collection />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
