/*function CreateOrder() {
  return (
    <div>
      <h1>Create Order</h1>

      <form>
        <div>
          <label>Supplier Name</label>
          <br />
          <input type="text" />
        </div>

        <br />

        <div>
          <label>Country</label>
          <br />
          <input type="text" />
        </div>

        <br />

        <div>
          <label>Product Name</label>
          <br />
          <input type="text" />
        </div>

        <br />

        <div>
          <label>Quantity</label>
          <br />
          <input type="number" />
        </div>

        <br />

        <div>
          <label>Unit Cost</label>
          <br />
          <input type="number" />
        </div>

        <br />

        <div>
          <label>Shipping Cost</label>
          <br />
          <input type="number" />
        </div>

        <br />

        <div>
          <label>Customs Cost</label>
          <br />
          <input type="number" />
        </div>

        <br />

        <button type="submit">Create Order</button>
      </form>
    </div>
  );
}

export default CreateOrder;*/
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function CreateOrder() {
  const navigate = useNavigate();

  const [supplier, setSupplier] = useState("");
  const [product, setProduct] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newOrder = {
      supplier,
      product,
      status: "Ordered",
      totalCost: Number(cost),
    };

    try {
      await API.post("/orders", newOrder);

      alert("Order created successfully!");

      setSupplier("");
      setProduct("");
      setCost("");

      navigate("/orders");
    } catch (error) {
      console.error(error);
      alert("Failed to create order");
    }
  };

  return (
    <div>
      <h1>Create Order</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Supplier Name</label>
          <br />
          <input
            type="text"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Product Name</label>
          <br />
          <input
            type="text"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Total Cost</label>
          <br />
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">Create Order</button>
      </form>
    </div>
  );
}

export default CreateOrder;