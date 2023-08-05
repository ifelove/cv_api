const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const connectDB = require("./db/connectDB");
require("dotenv").config();
require("express-async-errors");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const port = process.env.PORT || 5000;
const authRoute = require("./routes/authRouter");
const userRoute = require("./routes/userRoute");

app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

app.get("/", (req, res) => {
  res.send("<h1> Converting CV<h1>");
});

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users/", userRoute);

app.use(notFound);
app.use(errorHandler);

const start = async () => {
  await connectDB(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server listening on port ${port}`);
  });
};

start();
