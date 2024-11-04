import { useAuth } from "../../context/GlobalState";

function ProductCheck({ product }) {
  const { dispatch } = useAuth();
  function removeFromBasket() {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: product.id,
    });
  }
  function clearBasket() {
    dispatch({
      type: "EMPTY_BASKET",
      id: product.id,
    });
  }
  return (
    <div>
      <div className="product flex p-5 gap-6 " key={product.id}>
        <img src={product.image} alt="" className="w-32" />
        <div className="info">
          <p className="description font-bold">{product.description}</p>
          <p className="price font-bold my-4">${product.price}</p>
          <div className="rating flex items-center gap-1">
            <i className="icon-star"></i>
            <i className="icon-star"></i>
            <i className="icon-star"></i>
            <i className="icon-star"></i>
            <i className="icon-star"></i>
          </div>
          <button className="remove-from-cart" onClick={removeFromBasket}>
            Remove From Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCheck;
