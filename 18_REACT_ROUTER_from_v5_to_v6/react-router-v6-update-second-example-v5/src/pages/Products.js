import { Link } from "react-router-dom";

const Products = () => {
  // to imperative navigation you can't use anymore UseHistory
  // but there is a UseNavigate that is easy to use

  // const navigate = useNavigate();
  // navigate('/welcome') //default push
  // navigate("/welcome", { replace: true });
  // navigate(-2) //two steps backwards ... or -1, 1 as you need

  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">An Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
