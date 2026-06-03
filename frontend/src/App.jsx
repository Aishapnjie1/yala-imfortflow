/*import Dashboard from "./pages/Dashboard";

function App() {
  return <Dashboard />;
}

export default App;*/

/*import Orders from "./pages/Orders";

function App() {
  return <Orders />;
}

export default App;*/

/*import CreateOrder from "./pages/CreateOrder";

function App() {
  return <CreateOrder />;
}
*/

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import CreateOrder from "./pages/CreateOrder";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav
          style={{
            padding: "20px",
            backgroundColor: "#2563eb",
            color: "white",
          }}
        >
          <Link
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

          <Link
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
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/create-order" element={<CreateOrder />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;