import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Page/Home';
import './Assets/styles/styles.scss'
import Product from './Page/Product';
import Blog from './Page/Blog';
import Introduce from './Page/Introduce';
import NotFound from './Component/notFound';
import Contact from './Page/Contact';
import ProductDetail from './Page/ProduceDetail';
import Cart from './Page/Cart';
function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product" exact component={Product} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/introduce" exact component={Introduce} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/product-detail" exact component={ProductDetail} />
          <Route path="/cart" exact component={Cart} />
          <Route path="*" exact={true} component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
