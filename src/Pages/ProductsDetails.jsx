import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductsDetails = () => {
  const param = useParams();
  const { id } = param;
  console.log(id);
  const [product, setProduct] = useState({});

  const fetchProduct = async () => {
    const response = await axios(`https://fakestoreapi.com/products/${id}`);
    setProduct(response.data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  console.log(product);
  return (
    <>
      <div className="container grid grid-cols-2 gap-6 flex-row items-center gap-5">
        <div className="bg-[#F3F4F4]  p-20 flex items-center justify-center">
          <img className=" " src={product.image} alt="" />
        </div>
        <div className="flex flex-col text-left gap-4">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <span>{product.category}</span>
          <div className="flex gap-2 text-amber-700   mt-auto">
            <span>Price</span>
            <span>${product.price}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductsDetails;
