import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7051548&lng=88.3397196&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      const data = await response.json();

      const resData =
        data?.data?.cards?.find((card) => card?.card?.card?.info)?.card?.card?.info;

      const menuData =
        data?.data?.cards
          ?.find((card) => card.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards
          ?.flatMap((card) => card.card?.card?.itemCards || [])
          ?.map((item) => item.card?.info) || [];

      setRestaurant(resData);
      setMenuItems(menuData);
    } catch (error) {
      console.error('Error fetching menu:', error);
    }
  };

  if (!restaurant) return <h2>Loading Menu...</h2>;

  return (
    <div className="menu">
      <h1>{restaurant.name}</h1>
      <p>{restaurant.cuisines.join(', ')} - ⭐ {restaurant.avgRating}</p>
      <p>{restaurant.costForTwoMessage}</p>

      <h2>Menu</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li key={`${item.id || item.name}-${index}`} style={{ marginBottom: '10px' }}>
            <strong>{item.name}</strong> - ₹{((item.price || item.defaultPrice || 0) / 100).toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
