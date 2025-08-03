import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // ✅ Toast styles

// Components
import Header from './src/Components/Header';
import Body from './src/Components/Body';
import About from './src/Components/About';
import Error from './src/Components/Error';
import Contactus from './src/Components/Contactus';
import RestaurantMenu from './src/Components/RestaurantMenu';
import Footer from './src/Components/Footer';
import Login from './src/Components/Login';
import Cart from './src/Components/Cart';


// Context
import { CartProvider } from './utils/CartContext';

// ✅ Layout with global providers
const AppLayout = () => {
  return (
    <CartProvider>
      <div className="app bg-gray-100 min-h-screen">
        <Header />
        <Outlet />
        <Footer />

        {/* ✅ Global toast renderer */}
        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    </CartProvider>
  );
};

// ✅ Router config
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Body /> },
      { path: '/about', element: <About /> },
      { path: '/contactus', element: <Contactus /> },
      { path: '/restaurant/:resId', element: <RestaurantMenu /> },
      { path: '/login', element: <Login /> },
      { path: '/cart', element: <Cart /> },
    ],
    errorElement: <Error />,
  },
]);

// ✅ Root rendering with StrictMode
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
