import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
function EachDetail(props) {
  
  const dispatch=useDispatch();
  function handleClick(item)
  {
      dispatch(addItem(item));
  }
  const med = props.mitem;
  const brandName = med.brand_name;
  const dosageForm = med.dosage_form;
  const route = med.route;
  const productType = med.product_type;
  const genericName = med.generic_name;
  const ingredient = med.active_ingredients?.[0]?.name;
  const strength = med.active_ingredients?.[0]?.strength;

  function getRandomPrice(min = 50, max = 200) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const price = getRandomPrice();

  if (!brandName || !genericName || !ingredient) return null;

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-11/12 p-4 sm:p-6 bg-white shadow-md rounded-xl mb-4 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
        <h1 className="text-2xl font-bold text-blue-700 mb-3 text-center hover:text-blue-800 transition-colors duration-200">
          {brandName}
        </h1>

        <p className="mb-2">
          <span className="font-semibold text-gray-700">🧾 Generic Name:</span>{" "}
          <span className="text-gray-600">{genericName}</span>
        </p>

        <p className="mb-2">
          <span className="font-semibold text-gray-700">💊 Dosage Form:</span>{" "}
          <span className="text-gray-600">{dosageForm}</span>
        </p>

        <p className="mb-2">
          <span className="font-semibold text-gray-700">📦 Route:</span>{" "}
          <span className="text-gray-600">{route}</span>
        </p>

        <p className="mb-2">
          <span className="font-semibold text-gray-700">🧪 Ingredient:</span>{" "}
          <span className="text-gray-600">{ingredient} ({strength})</span>
        </p>

        <p className="mb-2">
          <span className="font-semibold text-gray-700">🏷️ Product Type:</span>{" "}
          <span className="text-gray-600">{productType}</span>
        </p>

        <div className="mb-1 flex flex-col items-center sm:items-end">
          <div className="p-2">
            <span className="font-semibold text-green-600">💰 Price: ₹</span>
            <span className="text-green-500">{price}</span>
          </div>
          <div>
            <button onClick={(e)=>handleClick({brandName,genericName,price})} className="border p-2 bg-blue-700 text-white rounded hover:bg-blue-500">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EachDetail;

