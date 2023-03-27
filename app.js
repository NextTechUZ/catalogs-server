const express = require("express");
const morgan = require("morgan");

const userRoutes = require("./routers/userRouter");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/users", userRoutes);

module.exports = app;

// PASSWORD = XVAr6bZCzJWHZrFl
// DATABASE = mongodb+srv://fazliddin:<password>@cluster0.2vmvbt7.mongodb.net/?retryWrites=true&w=majority
// APP_URL = localhost:3000

// JWT_SECRET = thiswisjwtsecret
// JWT_EXPIRES = 90d

// const t = {
//   images: string[],
//   titleRu: string,
//   titleUz: string,
//   descriptionRu: string,
//   descriptionUz: string,
//   about:string
// };
