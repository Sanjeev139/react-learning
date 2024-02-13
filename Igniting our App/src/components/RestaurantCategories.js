// // import { IMAGE_URL } from "../utils/constant";

import MenuList from "./MenuList";

const RestaurantCategories = ({ data, showItems, setShowIndex }) => {

  const toggleMenu = () => {
    setShowIndex()
  }

  return (
    <div className="m-auto bg-gray-200 w-6/12 pb-10 mb-3">
      <div className="flex justify-between cursor-pointer h-0" onClick={toggleMenu}>
        <p className="text-black text-left m-2 font-bold">{data.title} ({data.itemCards.length})</p>
        <span className="p-2">⬇️</span>
      </div>
      <div className="p-2 text-left">
      {showItems && <MenuList items={data.itemCards}></MenuList>}
      </div>
    </div>
    
  )
}
export default RestaurantCategories;
