import { useSelector } from "react-redux";
import CartItem from "./CartItem";
function Cart(){
    const cartItems=useSelector((store)=>store.cart.items)
    console.log(cartItems);
   return(
    <div className="flex flex-wrap justify-center gap-4">
  {cartItems.map((item, index) => (
    <CartItem props={item} key={index} />
  ))}
</div>

   );
}
export default Cart;