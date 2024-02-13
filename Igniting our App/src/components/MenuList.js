import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice";
import { useState } from "react";

const MenuList = ({items}) => {

    const [count, setCount] = useState(0)
    console.log(items)
    const dispatch = useDispatch();

    const addItemtoCart = (item) => {
        dispatch(addItem(item))
        setCount(item.length)
    }

    return (
       <div>
        {
            items.map((item) => (
                <div key={item.card.info.id}
                className="p-2 m-10 flex justify-between text-left border-gray-400 border-b-4">
                    <div className="text-left w-9/12">
                        <span className="font-bold">{item.card.info.name}</span>
                        <p>&#8377; {item.card.info.price / 100}</p>
                        <p className="text-xs text-left">{item.card.info.description}</p>
                    </div>
                    <div>
                        <button className="bg-green-300 text-white-400 rounded-xl p-1 text-center w-10/12 pl-1 border-r-8 text-sm" onClick={() => addItemtoCart(item)}> + ADD {count} </button>
                        <img className="w-40 h-30" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item.card.info.imageId}></img>
                    </div>
                </div>
            ))
        }
       </div>
    )
}
export default MenuList;