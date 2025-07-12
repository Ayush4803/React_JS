import React from 'react';
import ReactDOM from 'react-dom/client';



// React Element
const Tittle = (
     <h1 className="Header">This is My Title</h1>
);


// React Component
const HeadingComponent = () => {
    return (
        <div>
            {/* // This is COMPONENT COMPOSTION (calling a component/element inside another component) */}
             {Tittle}
            <h2 className="header">This is my React Functional Component 🚀🚀</h2>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HeadingComponent/>
);


