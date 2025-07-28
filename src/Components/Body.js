import { useState, useEffect } from 'react';
import RestaurantCard from './Restaurantcard.js';
import Shimmer from './Shimmer.js';

const Body = () => {
    const [listofRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [nextOffset, setNextOffset] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async (offset = 0) => {
        try {
            const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5664528&lng=88.3215014&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING${offset ? `&offset=${offset}` : ''}`;

            const data = await fetch(url);
            const json = await data.json();

            const restaurantData = json.data.cards.find(
                (card) => card.card?.card?.id === "restaurant_grid_listing_v2"
            );

            const restaurants = restaurantData?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            const offsetData = json.data.pageOffset?.nextOffset;

            setListOfRestaurant((prev) => offset ? [...prev, ...restaurants] : restaurants);
            setFilteredRestaurant((prev) => offset ? [...prev, ...restaurants] : restaurants);
            setNextOffset(offsetData || null);
        } catch (error) {
            console.error("Failed to fetch restaurant data:", error.message || error);
            alert("Error fetching data. Please try again later.");
        }
    };

    const handleSearch = () => {
        const filtered = listofRestaurant.filter((res) =>
            res.info?.name?.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurant(filtered);
    };

    const handleTopRated = () => {
        const topRated = listofRestaurant.filter(
            (res) => parseFloat(res.info?.avgRating) > 4.5
        );
        setFilteredRestaurant(topRated);
    };

    const handleReset = () => {
        setFilteredRestaurant(listofRestaurant);
        setSearchText('');
    };

    if (listofRestaurant.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="body">
            <div className="search" style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Search Restaurant"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    style={{ padding: "5px" }}
                />
                <button className="button" onClick={handleSearch}>Search</button>
                <button className="button" onClick={handleTopRated}>Top Rated</button>
                <button className="button" onClick={handleReset}>Reset</button>
            </div>

            <div className="res-container">
                {filteredRestaurant.length === 0 ? (
                    <p style={{ margin: "20px", fontWeight: "bold" }}>No restaurants found.</p>
                ) : (
                    filteredRestaurant.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                )}
            </div>

            {nextOffset && (
                <div style={{ textAlign: "center", margin: "20px" }}>
                    <button className="button" onClick={() => fetchData(nextOffset)}>
                        Load More Restaurants
                    </button>
                </div>
            )}
        </div>
    );
};

export default Body;
