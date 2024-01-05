import { useEffect, useState } from "react"
import { RESTAURANT_MENU_API } from "../utils/constant"

const useRestaurantMenu = (resId) => {

    const [resMenu, setResMenu] = useState(null);

    useEffect(() => {
        fetchData(); 
    },[])

    const fetchData = async() => {
        const getResInfo = await fetch(RESTAURANT_MENU_API + resId);
        const json = await getResInfo.json();
        setResMenu(json.data)
    };
    return resMenu;
}
export default useRestaurantMenu;