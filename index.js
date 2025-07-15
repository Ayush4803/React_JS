import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
    return (
        <div className="Header">
            <div className="LogoContainer">
                <img className="logo"
                    src="https://cdn11.bigcommerce.com/s-qfvinq6/images/stencil/1280x1280/products/642/1185/Screen_Shot_2017-01-18_at_11.43.35_AM__92507.1641104123.png?c=2" />
            </div>
            <div className="Nav-Items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = ({ resData }) => {
    const { name, avgRating, costForTwo, sla,cuisines,cloudinaryImageId } = resData.info;

    return (
        <div className="res-card">
            <img className="res-img"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
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

const resList = [
                                    {
                                        "info": {
                                            "id": "151649",
                                            "name": "Hotel Sai Nath & Sai Restaurant",
                                            "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
                                            "locality": "railway station",
                                            "areaName": "Chhindwara Locality",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "North Indian",
                                                "South Indian",
                                                "Chinese",
                                                "Beverages",
                                                "Fast Food",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.4,
                                            "veg": true,
                                            "parentId": "101802",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "1.0K+",
                                            "sla": {
                                                "deliveryTime": 39,
                                                "lastMileTravel": 11.3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "35-40 mins",
                                                "lastMileTravelString": "11.3 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-07-15 22:30:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-84a7192e-1860-4bc9-98fc-40065f9bcbca"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "151518",
                                            "name": "Bakery World",
                                            "cloudinaryImageId": "mt2aggiscfl3yviatwng",
                                            "locality": "Parasia Road",
                                            "areaName": "Parasia Road",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Bakery",
                                                "Ice Cream",
                                                "Snacks",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.5,
                                            "veg": true,
                                            "parentId": "40363",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "277",
                                            "sla": {
                                                "deliveryTime": 43,
                                                "lastMileTravel": 14.1,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "40-45 mins",
                                                "lastMileTravelString": "14.1 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-07-15 22:30:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-84a7192e-1860-4bc9-98fc-40065f9bcbca"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/chhindwara/bakery-world-parasia-road-rest151518",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "385824",
                                            "name": "The Belgian Waffle Co.",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG",
                                            "locality": "Sinchai Colony",
                                            "areaName": "Mohan Nagar",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Waffle",
                                                "Desserts",
                                                "Ice Cream",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.6,
                                            "veg": true,
                                            "parentId": "2233",
                                            "avgRatingString": "4.6",
                                            "totalRatingsString": "316",
                                            "sla": {
                                                "deliveryTime": 50,
                                                "lastMileTravel": 12.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "50-55 mins",
                                                "lastMileTravelString": "12.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-07-15 22:45:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-84a7192e-1860-4bc9-98fc-40065f9bcbca"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/chhindwara/the-belgian-waffle-co-sinchai-colony-mohan-nagar-rest385824",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "234875",
                                            "name": "Adil Hotel",
                                            "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
                                            "locality": "Rautha Wada",
                                            "areaName": "Chhindwara Locality",
                                            "costForTwo": "₹150 for two",
                                            "cuisines": [
                                                "North Indian",
                                                "Biryani",
                                                "Tandoor"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "27123",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "1.3K+",
                                            "sla": {
                                                "deliveryTime": 37,
                                                "lastMileTravel": 11.5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "35-40 mins",
                                                "lastMileTravelString": "11.5 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-07-16 00:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-84a7192e-1860-4bc9-98fc-40065f9bcbca"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "151656",
                                            "name": "Dev International",
                                            "cloudinaryImageId": "enj3srsnhbltbom2ovvh",
                                            "locality": "khajri road",
                                            "areaName": "Mohan Nagar",
                                            "costForTwo": "₹100 for two",
                                            "cuisines": [
                                                "North Indian",
                                                "Chinese",
                                                "Fast Food",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "71556",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "547",
                                            "sla": {
                                                "deliveryTime": 53,
                                                "lastMileTravel": 13.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "50-55 mins",
                                                "lastMileTravelString": "13.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-07-15 22:30:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹65 OFF",
                                                "subHeader": "ABOVE ₹199",
                                                "discountTag": "FLAT DEAL",
                                                "headerTypeV2": 12
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-84a7192e-1860-4bc9-98fc-40065f9bcbca"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/chhindwara/dev-international-khajri-road-mohan-nagar-rest151656",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "625927",
                                            "name": "Kathi Junction",
                                            "cloudinaryImageId": "nigqvxgzvyxtfjuqasgg",
                                            "locality": "Bunglow Madhuvan Colony",
                                            "areaName": "Prasia Road",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "rolls",
                                                "Burgers",
                                                "Pizzas",
                                                "Fast Food"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "1935",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "375",
                                            "sla": {
                                                "deliveryTime": 52,
                                                "lastMileTravel": 12.2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "50-55 mins",
                                                "lastMileTravelString": "12.2 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-07-15 23:30:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹100 OFF",
                                                "subHeader": "ABOVE ₹399",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-84a7192e-1860-4bc9-98fc-40065f9bcbca"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/chhindwara/kathi-junction-bunglow-madhuvan-colony-prasia-road-rest625927",
                                            "type": "WEBLINK"
                                        }
                                    },


                                    {
                                        "info": {
                                            "id": "150591",
                                            "name": "Satkar Restaurant",
                                            "cloudinaryImageId": "rvxp5xbniat84r6efku2",
                                            "locality": "Sinchai Colony",
                                            "areaName": "Satkar Chowk",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "North Indian",
                                                "South Indian",
                                                "Indian",
                                                "Salads",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.4,
                                            "veg": true,
                                            "parentId": "21553",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "3.0K+",
                                            "sla": {
                                                "deliveryTime": 44,
                                                "lastMileTravel": 13.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "40-45 mins",
                                                "lastMileTravelString": "13.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-07-15 22:45:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                                                        "description": "Delivery!"
                                                    },
                                                    {
                                                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-84a7192e-1860-4bc9-98fc-40065f9bcbca"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/chhindwara/satkar-restaurant-sinchai-colony-satkar-chowk-rest150591",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "658210",
                                            "name": "The Fusion Lounge",
                                            "cloudinaryImageId": "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
                                            "locality": "Triloki nagar",
                                            "areaName": "Railway Station",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "South Indian",
                                                "Chinese",
                                                "Beverages",
                                                "Fast Food",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "395453",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "353",
                                            "sla": {
                                                "deliveryTime": 44,
                                                "lastMileTravel": 10.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "40-45 mins",
                                                "lastMileTravelString": "10.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-07-15 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-84a7192e-1860-4bc9-98fc-40065f9bcbca"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/chhindwara/the-fusion-lounge-triloki-nagar-railway-station-rest658210",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "151515",
                                            "name": "Gupta Bhojnalay",
                                            "cloudinaryImageId": "jo9pdipf4elcuch8g55q",
                                            "locality": "fulwara chowk",
                                            "areaName": "Chhindwara Locality",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Fast Food",
                                                "Indian",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.8,
                                            "veg": true,
                                            "parentId": "91635",
                                            "avgRatingString": "4.8",
                                            "totalRatingsString": "450",
                                            "sla": {
                                                "deliveryTime": 40,
                                                "lastMileTravel": 11.8,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "40-45 mins",
                                                "lastMileTravelString": "11.8 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-07-15 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹100 OFF",
                                                "subHeader": "ABOVE ₹999",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-84a7192e-1860-4bc9-98fc-40065f9bcbca"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/chhindwara/gupta-bhojnalay-fulwara-chowk-chhindwara-locality-rest151515",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "184424",
                                            "name": "Sab Ghar Tak Foods",
                                            "cloudinaryImageId": "ryzswg44bt7thqzkuaj4",
                                            "locality": "Sanchar Colony",
                                            "areaName": "Parsia Road",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "North Indian",
                                                "South Indian",
                                                "Chinese",
                                                "Beverages",
                                                "Fast Food",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.1,
                                            "parentId": "173932",
                                            "avgRatingString": "4.1",
                                            "totalRatingsString": "617",
                                            "sla": {
                                                "deliveryTime": 51,
                                                "lastMileTravel": 14.1,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "50-55 mins",
                                                "lastMileTravelString": "14.1 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-07-15 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹50 OFF",
                                                "subHeader": "ABOVE ₹199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-84a7192e-1860-4bc9-98fc-40065f9bcbca"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/chhindwara/sab-ghar-tak-foods-sanchar-colony-parsia-road-rest184424",
                                            "type": "WEBLINK"
                                        }
                                    }
                                
                                ]
    

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

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
