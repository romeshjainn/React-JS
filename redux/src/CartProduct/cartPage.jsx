import { useSelector } from "react-redux";

const CartPage = () => {
  const cartStore = useSelector((state) => state.CartArray.data);

  
  return (
    <div className="border-2 border-black ">
      {cartStore.map((item, index) => {
        return (
          <div key={index} className="border-2 border-black bg-red-500 w-full">
            <img src={item.image} width={50} height={50} alt="" />
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CartPage;
