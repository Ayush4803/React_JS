import { useState, useEffect } from 'react';
import RestaurantCard from './Restaurantcard.js';
import Shimmer from './Shimmer.js';

const Body = () => {
    const [listofRestaurant, setListOfRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5664528&lng=88.3215014&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        const restaurantData = json.data.cards.find(
            (card) => card.card?.card?.id === "restaurant_grid_listing_v2"
        );

        setListOfRestaurant(restaurantData.card.card.gridElements.infoWithStyle.restaurants);
    };

    // ✅ THIS is where Shimmer should be returned
    if (listofRestaurant.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="body">
            <div className="search">
                <button
                    className="button"
                    onClick={() => {
                        const filterList = listofRestaurant.filter(
                            (res) => res.info && res.info.avgRating > 4.5
                        );
                        setListOfRestaurant(filterList);
                    }}
                >
                    Search
                </button>
            </div>

            <div className="res-container">
                {listofRestaurant.map((restaurant, id) => (
                    <RestaurantCard key={id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
