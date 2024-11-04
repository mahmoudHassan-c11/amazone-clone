import { useEffect, useState } from "react";
import "./home.css";
import Product from "./Product";
import { data } from "autoprefixer";
function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setcategories] = useState([]);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };
  const productsList = products.map((product) => {
    return <Product key={product.id} product={product} />;
  });

  const getCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setcategories(data));
  };

  const getProductCategory = (catName) => {
    fetch(`https://fakestoreapi.com/products/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const productsCatogeries = categories.map((cat) => {
    return (
      <button
        key={cat}
        onClick={() => {
          getProductCategory(cat);
        }}
        className=" relative ml-2 py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"
      >
        {cat}
      </button>
    );
  });

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <div className="home">
      <div className="home-content overflow-hidden">
        <img src="Images\home.jpg" alt="" className="image" />
        <div className="category-list flex justify-center gap-4">
          <button
            onClick={() => {
              getProducts();
            }}
            className=" relative z-20 ml-2 py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-500 focus:ring-opacity-100 active:bg-violet-700"
          >
            All Products
          </button>
          {productsCatogeries}
        </div>
        <div className="products-list flex flex-wrap gap-x-4  gap-y-6 mx-4 mt-10 justify-center">
          {productsList}
        </div>
      </div>
    </div>
  );
}

export default Home;
