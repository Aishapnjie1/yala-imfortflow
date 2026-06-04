/*
CreateOrder.jsx

This page allows users to create a new import order.
Form data is submitted to the backend API and saved
to the orders list.
*/

//import react state hook
import { useState } from "react";
import { useNavigate } from "react-router-dom"; //import navigate hook from react router
import API from "../services/api"; // import API instance

function CreateOrder() {
  const navigate = useNavigate(); //allows navigation to another page after creating an order

  //state variables for form inputs
  const [supplier, setSupplier] = useState("");
  const [product, setProduct] = useState("");
  const [cost, setCost] = useState("");

  //handle from submission
  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent page refresh

    //create new order object usisng data
    const newOrder = {
      supplier,
      product,
      status: "Ordered",
      totalCost: Number(cost),
    };

    try {
      await API.post("/orders", newOrder); // send order data to backend API

      alert("Order created successfully!"); //dispaly success message

      //clear form feilds after successful submission
      setSupplier("");
      setProduct("");
      setCost("");

      //redirect usser to order page
      navigate("/orders");
    } catch (error) {
      console.error(error); // for debigging
      alert("Failed to create order"); // error message
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/*form container card */}
      <div
        style={{
          width: "500px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "30px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h1>Create Order</h1>
        {/*form submission and supplier name input */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label>Supplier Name</label>
            <input
              type="text"
              value={supplier}
              onChange={(e) => setSupplier(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
              }}
            />
          </div>
              {/*product name input */}
          <div style={{ marginBottom: "15px" }}>
            <label>Product Name</label>
            <input
              type="text"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
              }}
            />
          </div>
              {/*total cost input */}
          <div style={{ marginBottom: "20px" }}>
            <label>Total Cost</label>
            <input
              type="number"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
              }}
            />
          </div>
              {/*create order button */}
          <button
            type="submit"
            style={{
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              padding: "12px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
              fontSize: "16px",
            }}
          >
            Create Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateOrder;