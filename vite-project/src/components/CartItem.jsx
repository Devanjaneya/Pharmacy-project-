import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
function CartItem(props) {
    const dispatch=useDispatch();
    const item=props.props;
    function handleRemove(){
         dispatch(removeItem(item));
    }
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 ">
  <div className="flex flex-col border border-gray-300 rounded-xl p-4 h-full bg-white shadow hover:shadow-lg transition-shadow duration-300">
    
    <h1 className="text-lg font-semibold text-blue-700 mb-1 text-center">
      {props.props.brandName}
    </h1>

    <h2 className="text-sm text-gray-600 mb-1 text-center">
      {props.props.genericName}
    </h2>

    <p className="text-green-600 font-bold text-md text-center mb-4">
      ₹{props.props.price}
    </p>

    <button 
      onClick={() => handleRemove()} 
      className="mt-auto border px-3 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 transition-colors"
    >
      Remove
    </button>
  </div>
</div>

  );
}

export default CartItem;
