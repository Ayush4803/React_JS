import { CDN_URL } from "../../utils/constant";
const RestaurantCard = ({ resData }) => {
    const { name, avgRating, costForTwo, sla, cuisines, cloudinaryImageId } = resData.info;

    return (
        <div className="res-card">
            <img className="res-img"
                src={CDN_URL +
                    cloudinaryImageId
                } />
            <h3>{name}</h3>
            <h4>⭐ {avgRating}</h4>
            <h4>⏱️ {sla.deliveryTime} mins</h4>
            <h4>💰 {costForTwo}</h4>
            <h4>{cuisines}</h4>
        </div>
    );
};

export default RestaurantCard;