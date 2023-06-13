import {
  Route,
  RouterProvider,
  createBrowserRouter,
  //createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Homepage from "./pages/Home";
import ProductsPage from "./pages/Products";

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Homepage />} />
    <Route path="/products" element={<ProductsPage />} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions);

/* const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/products", element: <ProductsPage /> },
]); */
//
function App() {
  return <RouterProvider router={router} />;
}

export default App;
