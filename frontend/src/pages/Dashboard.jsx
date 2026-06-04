/*
Dashboard.jsx

This page displays key import statistics including
total orders, orders in transit, delivered orders,
and total import value.
*/

export default Dashboard;

// Import React hooks
import { useEffect, useState } from "react";

// Import API service for backend requests
import API from "../services/api";

function Dashboard() {

  // Store order data retrieved from backend
  const [orders, setOrders] = useState([]);

  // Run once when component loads
  useEffect(() => {
    fetchOrders();
  }, []);

  // Retrieve orders from backend API
  const fetchOrders = async () => {
    try {

      // Send GET request to backend
      const response = await API.get("/orders");

      // Save orders into state
      setOrders(response.data);

    } catch (error) {

      // Display error in console
      console.error("Error fetching orders:", error);
    }
  };

  // Calculate total number of orders
  const totalOrders = orders.length;

  // Count orders currently in transit
  const inTransitOrders = orders.filter(
    (order) => order.status === "In Transit"
  ).length;

  // Count delivered orders
  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered"
  ).length;

  // Calculate total value of all imports
  const totalImportValue = orders.reduce(
    (total, order) => total + Number(order.totalCost),
    0
  );

  return (
    <div style={{ padding: "20px" }}>

      {/* Dashboard title */}
      <h1>ImportFlow Dashboard</h1>

      {/* Dashboard statistics cards */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >

        {/* Total Orders Card */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            minWidth: "200px",
          }}
        >
          <h3>Total Orders</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>
            {totalOrders}
          </p>
        </div>

        {/* In Transit Orders Card */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            minWidth: "200px",
          }}
        >
          <h3>In Transit</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>
            {inTransitOrders}
          </p>
        </div>

        {/* Delivered Orders Card */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            minWidth: "200px",
          }}
        >
          <h3>Delivered</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>
            {deliveredOrders}
          </p>
        </div>

        {/* Total Import Value Card */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            minWidth: "200px",
          }}
        >
          <h3>Total Import Value</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>
            ${totalImportValue}
          </p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;