import { useEffect } from "react";
import { useAuth } from "../../context/GlobalState";
import "./product.css";
function Product({ product }) {
  const { dispatch, basket } = useAuth();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        description: product.description,
      },
    });
  };

  return (
    <div className="box basis-80 bg-white ">
      <p className="name">{product.title}</p>
      <img src={product.image} alt="" />
      <p className="description">{product.description}</p>
      <p className="price py-3 ">
        Price: $<strong>{product.price}</strong>
      </p>
      <div className="rating flex items-center gap-1">
        <i className="icon-star"></i>
        <i className="icon-star"></i>
        <i className="icon-star"></i>
        <i className="icon-star"></i>
        <i className="icon-star"></i>
      </div>
      <button className="add-cart" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
