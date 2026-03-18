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
      <h2>This is Product Details</h2>
      <div className="flex flex-col items-center gap-5">
        <h2>{product.title}</h2>
        <img className="w-[110px]" src={product.image} alt="" />
      </div>
    </>
  );
};
export default ProductsDetails;
