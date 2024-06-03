import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Shop from './pages/Shop.jsx';
import './index.css';
import Cart from "./pages/Cart.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productState from "./features/ProductState.jsx";
import cartSlice from "./features/CartState.jsx";


const store = configureStore({
  reducer: {
    item: productState,
    cart: cartSlice,
  },
});

// Create a router with your defined routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <LandingPage />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  { 
    path: "/cart", element: <Cart /> 
  },
]);

// Render the RouterProvider at the root element
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
