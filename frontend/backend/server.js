const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const orders = [
  {
    id: 1,
    supplier: "Shenzhen Electronics",
    product: "Smartphones",
    status: "In Transit",
    totalCost: 5000,
  },
];

app.get("/orders", (req, res) => {
  res.json(orders);
});

app.post("/orders", (req, res) => {
  const newOrder = {
    id: orders.length + 1,
    ...req.body,
  };

  orders.push(newOrder);

  res.status(201).json(newOrder);
});

app.listen(5001, () => {
  console.log("Server running on port 5001");
});