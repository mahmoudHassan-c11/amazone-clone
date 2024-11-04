import { useAuth } from "../../context/GlobalState";
import Header from "../header/Header";
import "./basket.css";
import CurrencyFormat from "react-currency-format";
import { getPriceTotal } from "../../context/AppReducer";
import { useNavigate } from "react-router-dom";
import ProductCheck from "../pyment/ProductCheck";
function BasketPage() {
  const navigate = useNavigate();
  const { user, basket, dispatch } = useAuth();

  const productsList =
    basket.length > 0 ? (
      basket.map((item) => <ProductCheck key={item.id} product={item} />)
    ) : (
      <div className="text-center text-xl">
        You have no items on your basket. To buy one or more items, click "Add
        to basket"
      </div>
    );

  return (
    <>
      <div className="basket-content flex items-center justify-between p-5">
        <div className="checout-left w-3/4">
          <img
            src="public\Images\checkoutAd.jpg"
            className=" w-full mb-3"
            alt=""
          />
          <div>
            <h3 className="font-bold">Hello, {user?.email} </h3>
            <h2 className="checkout-title font-bold p-2 ml-2 text-2xl">
              Your shopping Basket
            </h2>
          </div>
        </div>
        <div className="checkout-right w-1/4 ">
          <div className="subtotal p-4 h-28">
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <p>
                    Subtotal ({basket.length} items):
                    <strong>{value}</strong>
                  </p>
                  <small className="subtotal__gift ">
                    <input type="checkbox" className="mr-1" name="" id="" />
                    This order contains a gift
                  </small>
                </>
              )}
              decimalScale={2}
              value={getPriceTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
            <button onClick={() => navigate("/payment")}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      {productsList}
    </>
  );
}

export default BasketPage;
