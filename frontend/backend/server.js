/*
server.js

This file contains the Express backend server.
It provides API endpoints for retrieving and
creating import orders.
*/

const express = require("express"); //Importing the Express framework
const cors = require("cors"); //Importing the CORS middleware to allow front
const app = express(); //Creating an instance of the Express

app.use(cors()); //Cors to allow frontend requests
app.use(express.json()); //To allow JSON requests

//Oder data stored in memory
const orders = [
  {
    id: 1,
    supplier: "Shenzhen Electronics",
    product: "Smartphones",
    status: "In Transit",
    totalCost: 5000,
  },
];

//To retrieve all orders
app.get("/orders", (req, res) => 
  {
   res.json(orders);
  }
);

// POST to create a new order
app.post("/orders", (req, res) => {
  const newOrder = 
  {
    id: orders.length + 1,
    ...req.body,
  };
    // add order to array
    orders.push(newOrder);

    // return create order
    res.status(201).json(newOrder);
  });

  // Start the server on port 5001
app.listen(5001, () => {
  console.log("Server running on port 5001");
});