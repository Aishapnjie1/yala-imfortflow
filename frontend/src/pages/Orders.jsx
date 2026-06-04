/*
Orders.jsx

This page retrieves order data from the backend API
and displays all orders in a table.
*/

// Import React hooks
import { useEffect, useState } from "react";

// Import API service for backend requests
import API from "../services/api";

function Orders() {

  // Store orders retrieved from backend
  const [orders, setOrders] = useState([]);

  // Run once when component loads
  useEffect(() => {
    fetchOrders();
  }, []);

  // Fetch all orders from backend API
  const fetchOrders = async () => {
    try {

      // Send GET request to backend
      const response = await API.get("/orders");

      // Save returned orders into state
      setOrders(response.data);

    } catch (error) {

      // Display error in console
      console.error("Error fetching orders:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>

      {/* Page heading */}
      <h1>Orders</h1>

      {/* Orders data table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>

          {/* Table column headers */}
          <tr>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
              }}
            >
              Supplier
            </th>

            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
              }}
            >
              Product
            </th>

            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
              }}
            >
              Status
            </th>

            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
              }}
            >
              Total Cost
            </th>
          </tr>
        </thead>

        <tbody>

          {/* Loop through all orders and display each one */}
          {orders.map((order) => (

            <tr key={order.id}>

              {/* Supplier name */}
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                }}
              >
                {order.supplier}
              </td>

              {/* Product name */}
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                }}
              >
                {order.product}
              </td>

              {/* Current order status */}
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                }}
              >
                {order.status}
              </td>

              {/* Total order cost */}
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                }}
              >
                ${order.totalCost}
              </td>

            </tr>

          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;