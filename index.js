import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/Components/Header';
import Body from './src/Components/Body';
import About from './src/Components/About';
import Error from './src/Components/Error';
import Contactus from './src/Components/Contactus';
import RestaurantMenu from './src/Components/RestaurantMenu';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'; // ✅ FIXED

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet /> {/* ✅ renders the child route */}
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contactus',
                element: <Contactus />,
            },

            { path: '/restaurant/:resId', element: <RestaurantMenu /> }

        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
