import { Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/productDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  // dynamic path segment=        :anyvalue
  // in the ProducDetail component I will get access to that identifier
  // in order to e.g. have access to a specific product in the DB
  // and its details
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/product-detail/:productId">
          <ProductDetail />
        </Route>
      </main>
    </div>
  );
}

export default App;
