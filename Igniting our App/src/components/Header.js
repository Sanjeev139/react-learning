import { LOGO_URL } from "../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const { loggedInuser } = useContext(UserContext);

  //Subscribing to the store using selector
  const cartItems = useSelector(store => store.cart.items);

  return (
    <div className="flex justify-between bg-cyan-200">
      <div className="w-20 h-20">
        <img className="w-25 h-25 bg-opacity-0" src={LOGO_URL} />
      </div>
      <div className="align-middle items-center">
        <ul className="flex ml-2 pr-4">
          <li className="p-5"><Link to="/">Home</Link></li>
          <li className="p-5"><Link to="/about">About Us</Link></li>
          <li className="p-5"><Link to="/contact">Contact</Link></li>
          <li className="p-5"><Link to="/cart">Cart 🛒 <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{cartItems.length}</span></Link></li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="p-5 mr-2">LoggedIn User : {loggedInuser} </li>
        </ul>
      </div>
    </div>
  );
};