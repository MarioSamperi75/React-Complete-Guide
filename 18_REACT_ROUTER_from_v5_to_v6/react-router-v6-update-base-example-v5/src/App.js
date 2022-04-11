// #1 Switch becomes Routes
// #2  Write the child-components as attribut (element={})

// #3 we can delete exact. the exact matching becomes the standard behavior
//    if you desire the old behavior you have to write the path like this:
//    path="/products/*"
//    that will match all the path starting with products
//    the new react router search anyway the best matching
//    even if we write it later: the order of the paths is no longer important
// #4 remove activeClassName (see MainHeader.js)

import { Route, Routes } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
