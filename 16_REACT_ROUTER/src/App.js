import { Route, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/productDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  // React router show ALL path that matches
  // and "/products/:productId" for react router matches
  // with both "/products" and "/products/:productId"

  // to show just 1 path we have to wrapp all paths in a <Switch> component
  // then the first matching path will be rendered
  // we can change the order
  // or add the attribute 'exact' to require a matching by exact path

  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
