import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Category from './pages/category';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/categoria/:category">
            <Category />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
