import { CDN_URL } from "../../utils/constant";
import { Link } from "react-router-dom";

const RestaurantCard = ({ resData }) => {
  const {
    id,
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    sla
  } = resData?.info || {};

  return (
    <Link to={`/restaurant/${id}`} className="res-link">
      <div className="res-card">
        <img
          className="res-img"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
        <div className="res-details">
          <h3 className="res-name">{name}</h3>
          <p className="res-cuisine">{cuisines?.join(", ")}</p>
          <div className="res-meta">
            <span className="res-rating">⭐ {avgRating}</span>
            <span className="res-dot">•</span>
            <span className="res-time">{sla?.slaString}</span>
            <span className="res-dot">•</span>
            <span className="res-price">{costForTwo}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
