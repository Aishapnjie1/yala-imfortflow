import { useEffect, useState } from "react";
import API from "../services/api";

function Orders() {
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

  return (
    <div style={{ padding: "20px" }}>
      <h1>Orders</h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
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
          {orders.map((order) => (
            <tr key={order.id}>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                }}
              >
                {order.supplier}
              </td>

              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                }}
              >
                {order.product}
              </td>

              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                }}
              >
                {order.status}
              </td>

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