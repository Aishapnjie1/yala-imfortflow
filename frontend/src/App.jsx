/*
App.jsx

This file manages application routing and navigation.
It connects the Dashboard, Orders, and Create Order pages
using React Router.
*/

//Import react router components
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Import page components
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import CreateOrder from "./pages/CreateOrder";

function App() {
  return (
    //BrowserRouter to enable routing in the app
    <BrowserRouter>
      <div>
        <nav //Navigation bar
          style={{
            padding: "20px",
            backgroundColor: "#2563eb",
            color: "white",
          }}
        >
          <Link // link to dashboard page
            to="/"
            style={{
              color: "white",
              marginRight: "20px",
              textDecoration: "none",
            }}
          >
            Dashboard
          </Link>

          <Link
            to="/orders"
            style={{
              color: "white",
              marginRight: "20px",
              textDecoration: "none",
            }}
          >
            Orders
          </Link>

          <Link // link to create order page
            to="/create-order"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Create Order
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} /> {/* Route for dashboard page */}
          <Route path="/orders" element={<Orders />} /> {/* Route for orders page */}
          <Route path="/create-order" element={<CreateOrder />} /> {/* Route for create order page */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;