import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();

  return (
    <section className="section">
      <h1 className="is-size-1 has-text-centered">Single Product</h1>
      <h3 className="is-size-2 has-text-centered">ID: {id}</h3>
    </section>
  );
};
export default SingleProduct;
