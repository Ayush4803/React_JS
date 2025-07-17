import { useState } from 'react'; // Don't forget to import useState
import RestaurantCard from './Restaurantcard.js';
import resList from '../../utils/mockdata';

const Body = () => {
    const [listofRestaurant, setListOfRestaurant] = useState(resList);

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
