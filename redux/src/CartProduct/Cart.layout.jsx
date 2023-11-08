import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";
import { Link } from "react-router-dom";
import CartPage from "./cartPage";

const CartLayout = () => {
  const dispatch = useDispatch();
  const [apiData, setApiData] = useState([]);
  const cartStore = useSelector((state) => state.CartArray.data);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((hello) => setApiData(hello));
  }, []);
  const onAddtoCart = (item) => {
    dispatch(addToCart(item));
  };
  console.log(cartStore);
  return (
    <div className="flex flex-wrap bg-white">
      {/* postfixer  */}
      {apiData.map((item) => {
        return (
          <div key={item.id} className="w-1/5 border-2 border-black">
            <img src={item.image} width={100} height={100} alt="" />
            <p>{item.title}</p>
            <p>{item.price}</p>
            <button onClick={() => onAddtoCart(item)}>Add to cart</button>
          </div>
        );
      })}
      <CartPage />
    </div>
  );
};
export default CartLayout;
