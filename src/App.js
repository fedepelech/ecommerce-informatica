import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Category from './pages/category';
import ArticleDetail from './pages/articleDetail';
import { Cart } from './pages/cart';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
    <body>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/categoria/:category">
            <Category />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/detalle">
            <ArticleDetail />
          </Route>
        </Switch>
      </main>
    </body>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
