//useParams allows to have access to the param we add in the URL
// http://localhost:3000/products/something
//useParams allows to have access to "something"

import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  return (
    <section>
      <h1>ProductDetail</h1>
      <p>{params.productId}</p>
    </section>
  );
};
export default ProductDetail;
