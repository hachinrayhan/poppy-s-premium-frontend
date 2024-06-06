/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={imageUrl} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <h2 className="card-title">Price: ${price}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-info">
            <Link to={`/products/${product._id}`}>See Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
