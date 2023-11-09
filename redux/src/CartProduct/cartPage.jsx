import { useDispatch, useSelector } from "react-redux";
import { deleteCard, increase, decrease } from "./CartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartStore = useSelector((state) => state.CartArray.data);
  const onDelete = (data) => {
    dispatch(deleteCard(data));
  };

  const onincrease = (data) => {
    dispatch(increase(data.id));
  };

  const ondecrease = (data) => {
    dispatch(decrease(data.id));
  };

  return (
    <div className="border-2 border-black ">
      {cartStore.map((item, index) => {
        return (
          <div key={index} className="border-2 border-black bg-red-500 w-full">
            <img src={item.image} width={50} height={50} alt="" />
            <p>{item.title}</p>
            <button
              onClick={() => {
                onDelete(item.id);
              }}
            >
              Delete product
            </button>
            <div className="bg-yellow-500 flex gap-5">
              <button
                onClick={() => {
                  onincrease(item);
                }}
                className="bg-red-500"
              >
                increase
              </button>
              <p>{item.quantity}</p>
              <button
                onClick={() => {
                  ondecrease(item);
                }}
                className="bg-red-500"
              >
                decrease
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartPage;
