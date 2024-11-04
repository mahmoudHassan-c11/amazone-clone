import { Link } from "react-router-dom";
import "../../index.css";
import "./header.css";
import { useState } from "react";
import { useAuth } from "../../context/GlobalState";
import { auth } from "../../firebase";

function Header() {
  const { user, basket } = useAuth();

  const [showModel, setShowModel] = useState(false);
  const [produtsCount, setProductsCount] = useState(0);

  const showModelHundel = () => {
    setShowModel(true);
  };
  const closeModelHundel = () => {
    setShowModel(false);
  };

  const hundleAuthSignOut = () => {
    auth.signOut();
  };
  return (
    <header className="header">
      <div className="container py-3 flex items-center gap-6 justify-between">
        <Link to="/">
          <img src="Images\header-logo.png" className="header-logo" />
        </Link>
        {showModel && (
          <div className="fixed">
            <div className="menu-popup">
              <div className="head">
                <p></p>
                <p className="icon-close1" onClick={closeModelHundel}></p>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-3/4 relative search">
                  <input type="search" className="w-full outline-none" />
                  <i className="icon-search"></i>
                </div>
                <Link className="cart" to="/basket">
                  <i className="icon-shopping-cart mr-3 text-xl"></i>
                  <span>{basket.length}</span>
                </Link>
              </div>
              <div className="links p-4 mt-5">
                <Link className="Link" to="login">
                  <p className="">Hello {`${user ? user.email : "Guest"}`}</p>
                  <span className="ml-2">Sign In</span>
                </Link>
                <Link className="Link">
                  <p className="">Returns</p>
                  <span className="ml-2">& Orders</span>
                </Link>
                <Link className="Link">
                  <p className="">Your</p>
                  <span className="ml-2">Prime</span>
                </Link>
              </div>
            </div>
          </div>
        )}
        <div className="flex items-center justify-between flex-1 header-links">
          <div className="w-2/3 relative search">
            <input type="search" className="w-full outline-none" />
            <i className="icon-search"></i>
          </div>

          <div className="links flex items-center justify-between gap-6">
            <Link to={!user && "/login"}>
              <div onClick={hundleAuthSignOut}>
                <p className=" text-xs">
                  Hello {`${user ? user.email : "Guest"}`} <br />
                </p>
                <span className=" font-bold text-sm">
                  {user ? "Sing Out" : "Sign In"}
                </span>
              </div>
            </Link>
            <Link>
              <p className=" text-xs ">
                Returns <br />
                <span className=" font-bold text-sm">& Orders</span>
              </p>
            </Link>
            <Link>
              <p className=" text-xs">
                Your <br />
                <span className=" font-bold text-sm">Prime</span>
              </p>
            </Link>
          </div>
          <Link className="cart" to="/basket">
            <i className="icon-shopping-cart mr-3 text-xl"></i>
            <span>{basket.length}</span>
          </Link>
        </div>
        <div className="menu cursor-pointer" onClick={showModelHundel}>
          <i className="icon-menu text-3xl"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
