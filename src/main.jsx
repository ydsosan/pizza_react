import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { CartProvider } from "./context/CartContext.jsx";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Cart.jsx";
import Home from './pages/Home.jsx';
import Pizza from './pages/pizzas.jsx';
import Profile from './pages/Profile.jsx';
import NotFound from './pages/NotFound.jsx';
import { UserProvider } from "./context/UserContext.jsx";
import ProtectedRoute from "./components/ProtectedRouted.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/cart", element: <Cart /> },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  { path: "/pizza/:id", element: <Pizza /> },
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </UserProvider>
  </StrictMode>
);