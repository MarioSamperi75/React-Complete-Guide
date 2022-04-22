import { Route, Navigate, Routes } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MainHeader from "./components/MainHeader";

// the welcome path is always exact in React Router v6
// BUT TO GET THE NESTED ROUTES YOU HAVE TO ADD A /*
//  /welcome/new-user e.g.

// now that we have the element attribute, that the element is no longer a child
// you can use nested routes as children! <Route> <Route> <Route/> <Route/>

// But we have to specificate where the child exactly has to appear
// see the Outlet component in Welcome.js
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/welcome" />} />
          <Route path="/welcome/*" element={<Welcome />}>
            <Route path="new-user" element={<p>Welcome, new user!</p>} />
          </Route>
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
