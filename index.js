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

const RestataurantCard=()=>{
    return(
        <div className="res-card">
        <img className="res-img"
         src="https://i.redd.it/p172ywhlgcna1.jpg"/>

          <h3> Deutsches Restaurant</h3>
          <h4 className="name"> Apple Strudel</h4>
          <h4 className="name2">⭐4.4 . 40-45 mins</h4>
          <h4 className="name_2">Authentische deutsche Küche</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <button className="button">Search</button>
            </div>
            <div className="res-container">
        {/* restaurant component */}
        <RestataurantCard/>
        <RestataurantCard/>
        <RestataurantCard/>
        <RestataurantCard/>
        <RestataurantCard/>
        <RestataurantCard/>
        <RestataurantCard/>
        
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <AppLayout />
);


