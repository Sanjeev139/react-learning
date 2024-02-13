import { useDispatch, useSelector } from "react-redux";
import MenuList from "./MenuList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch()
    const clearCartHandle = () => {
        dispatch(clearCart())
    }
    return (
        <div className="text-center m-4 p-4">
            <button className=" text-white bg-black p-2 rounded-lg" onClick={clearCartHandle}>Clear Cart</button>
            <div className="w-6/12 m-auto">
                <MenuList items={cartItems}></MenuList>
            </div>
        </div>
    )
}
export default Cart;