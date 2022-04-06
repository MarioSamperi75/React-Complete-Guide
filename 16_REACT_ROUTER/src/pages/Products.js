import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <ul>
        <Link to="/products/p1">
          <li>A book</li>
        </Link>
        <Link to="/products/p2">
          <li>A table</li>
        </Link>
        <Link to="/products/p3">
          <li>A carpet</li>
        </Link>
      </ul>
    </section>
  );
};

export default Products;
