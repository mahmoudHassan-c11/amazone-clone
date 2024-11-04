import CurrencyFormat from "react-currency-format";
import { useAuth } from "../../context/GlobalState";
import "./payment.css";
import { getPriceTotal } from "../../context/AppReducer";
import ProductCheck from "./ProductCheck";
import { Link } from "react-router-dom";
import { CardElement } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import axios from "axios";

function Payment() {
  const { basket, dispatch, user } = useAuth();
  const [clientSecret, setClientSecret] = useState();

  // useEffect(() => {
  //   const getClientSecret = async () => {
  //     const response = await axios({
  //       method: "post",
  //       url: `/payment/create?totla=${getPriceTotal(basket) * 100}`,
  //     });
  //     setClientSecret(response.data.clientSecret);
  //     return response;
  //   };
  //   getClientSecret();
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const productsList =
    basket.length > 0 ? (
      basket.map((item) => (
        <>
          <ProductCheck key={item.id} product={item} />
        </>
      ))
    ) : (
      <div className="text-center text-xl">
        You have no items on your basket. To buy one or more items, click "Add
        to basket"
      </div>
    );

  return (
    <div className="payment">
      <div className="check-items text-center text-3xl p-5 bg-gray-200">
        Checkout (
        <Link to="/basket" className=" text-violet-800">
          {basket.length} items
        </Link>
        )
      </div>
      <div className="container ">
        <div className="delivery flex items-center justify-between pt-10 pb-3">
          <h1 className="w-1/4 font-bold text-xl">Delivery Address</h1>
          <div className="flex-grow">
            <p>{user?.email}</p>
            <p>Alexandria, Egypt</p>
          </div>
        </div>
        <div className="delivery-items flex items-start justify-between pt-10 pb-5">
          <h1 className="w-2/4 font-bold ">Review items and delivery</h1>
          <div className="content">{productsList}</div>
        </div>
        <div className="payment-methode flex items-start justify-between pt-10 pb-5">
          <h1 className="w-1/4 font-bold text-xl">Payment Method</h1>
          <div className="payment-details flex-grow">
            <form onSubmit={handleSubmit}>
              {/* <CardElement onChange={hundleChange} /> */}
              <div class="payment-priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <p className="text-2xl font-bold">Order Total : {value}</p>
                  )}
                  decimalScale={2}
                  value={getPriceTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled="">
                  <span className="buy-now">Buy Now</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
