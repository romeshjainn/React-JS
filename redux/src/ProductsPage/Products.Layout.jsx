import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/products";

const ProductPage = () => {
  const cartProduct = useSelector((state) => state.productData.data);
  const dispatch = useDispatch();
  console.log(cartProduct);

  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => setProductList(data));
  }, []);

  const onAddToCart = (product) => {
    console.log(product)
    dispatch(addToCart(product))
    
  }

  return (
    <div className="flex flex-wrap border-2 justify-center border-black gap-2">
      {productList.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col border-2 border-red-500 w-1/5"
          >
            <img width={100} height={100} src={item.image} alt="" />
            <p>{item.title}</p>
            <button
            onClick={()=>onAddToCart(item)}
              className="bg-slate-500  text-white font-bold">
              add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default ProductPage;
