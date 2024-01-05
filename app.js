const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

const cocRoutes = require("./routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import the routes
app.use("/api/v1/coc", cocRoutes);

// error middleware
app.use((error, req, res, next) => {
  const message = error.message;
  const statusCode = error.statusCode || 500;
  const data = error.data;

  return res.status(statusCode).json({ message, data });
});

app.listen(port, () => {
  console.log("server listening on port ", port);
});
