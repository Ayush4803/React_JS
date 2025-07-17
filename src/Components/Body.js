import RestaurantCard from './Restaurantcard.js';
import resList from '../../utils/mockdata'


const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <button className="button">Search</button>
            </div>
            <div className="res-container">
           {
  resList.map((restaurant, id) => (
    <RestaurantCard key={id} resData={restaurant} />
  ))
}

            </div>
        </div>
    );
};

export default Body;