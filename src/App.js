import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Overview from './component/Overview';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Overview />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
