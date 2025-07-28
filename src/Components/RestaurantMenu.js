import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CDN_URL } from '../../utils/constant';
import { useCart } from '../../utils/CartContext';
import { toast } from 'react-toastify';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const { dispatch } = useCart();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const proxyUrl = 'https://thingproxy.freeboard.io/fetch/';
      const apiUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7051548&lng=88.3397196&restaurantId=${resId}`;
      const response = await fetch(proxyUrl + apiUrl);
      const data = await response.json();

      const resData =
        data?.data?.cards?.find((card) => card?.card?.card?.info)?.card?.card?.info;

      const menuData =
        data?.data?.cards
          ?.find((card) => card.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards
          ?.flatMap((card) => card.card?.card?.itemCards || [])
          ?.map((item) => item.card?.info) || [];

      setRestaurant(resData);
      setMenuItems(menuData);
    } catch (error) {
      console.error('Error fetching menu:', error);
      toast.error("Failed to load menu. Please try again.");
    }
  };

  const handleAddToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
    toast.success(`🛒 ${item.name} added to cart!`);
  };

  if (!restaurant) return <h2>Loading Menu...</h2>;

  return (
    <div className="menu-container">
      {restaurant.cloudinaryImageId && (
        <img
          src={CDN_URL + restaurant.cloudinaryImageId}
          alt={restaurant.name}
          className="menu-banner"
        />
      )}
      <h1 className="menu-title">{restaurant.name}</h1>
      <p className="menu-subtitle">
        {restaurant.cuisines?.join(', ')} • ⭐ {restaurant.avgRating}
      </p>
      <p className="menu-cost">{restaurant.costForTwoMessage}</p>

      <h2 className="menu-heading">Menu</h2>
      <ul className="menu-items">
        {menuItems.map((item, index) => (
          <li key={`${item.id}-${index}`} className="menu-item">
            <div>
              <span className="menu-item-name">{item.name}</span>
              <span className="menu-item-price">
                ₹{((item.price || item.defaultPrice || 0) / 100).toFixed(2)}
              </span>
            </div>
            <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
