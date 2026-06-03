/*function Dashboard() {
  return (
    <div>
      <h1>ImportFlow Dashboard</h1>

      <div>
        <h3>Total Orders</h3>
        <p>12</p>
      </div>

      <div>
        <h3>In Transit</h3>
        <p>4</p>
      </div>

      <div>
        <h3>Delivered</h3>
        <p>8</p>
      </div>

      <div>
        <h3>Total Import Value</h3>
        <p>$25,400</p>
      </div>
    </div>
  );
}

export default Dashboard;*/
import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await API.get("/orders");
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const totalOrders = orders.length;

  const inTransitOrders = orders.filter(
    (order) => order.status === "In Transit"
  ).length;

  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered"
  ).length;

  const totalImportValue = orders.reduce(
    (total, order) => total + Number(order.totalCost),
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>ImportFlow Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
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