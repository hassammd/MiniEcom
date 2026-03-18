import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Loader from "../Components/Loader";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    const response = await axios("https://fakestoreapi.com/products");

    setProducts(response.data);
    setLoading(false);
    // const response = await fetch("https://fakestoreapi.com/products");
    // const data = await response.json();
    // setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("this is data from axios", products);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap gap-[30px] justify-center ">
          {products
            ? products.map((items) => {
                return (
                  <div
                    onClick={() => navigate(`/products/${items.id}`)}
                    className="bg-[#F3F4F4] gap-3 px-4 py-6 w-[18%] flex flex-col rounded-xl"
                  >
                    <div className="flex items-center justify-center">
                      <img
                        className="w-[200px]  h-[200px] object-contain"
                        src={items.image}
                        alt=""
                      />
                    </div>
                    <p className="line-clamp-2 text-left">{items.title}</p>
                    {/* Rating */}
                    <div className="flex gap-2 text-xs items-center">
                      <span className=" flex items-center gap-1 justify-center  bg-green-700 rounded-xl text-white px-4 py-1">
                        <FaStar className="text-yellow-500" />
                        <p>{items.rating.rate}</p>
                      </span>
                    </div>
                    <div className="flex gap-2 text-amber-700   mt-auto">
                      <span>Price</span>
                      <span>${items.price}</span>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      )}
    </>
  );
};
export default Products;
