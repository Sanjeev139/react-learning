import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="flex justify-between bg-cyan-200">
      <div className="w-20 h-20">
        <img className="w-25 h-25" src={LOGO_URL} />
      </div>
      <div className="align-middle items-center">
        <ul className="flex ml-2 pr-4">
          <li className="p-5"><Link to="/">Home</Link></li>
          <li className="p-5"><Link to="/about">About Us</Link></li>
          <li className="p-5"><Link to="/contact">Contact</Link></li>
          <li className="p-5">Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};