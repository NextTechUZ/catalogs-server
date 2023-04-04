const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const adminRoutes = require("./routers/adminRouter");
const articleRoutes = require("./routers/articleRouter");
const categoryRoutes = require("./routers/categoryRouter");
const productRoutes = require("./routers/productRouter");
const swaggerRoutes = require("./routers/swaggerRoutes");
const mediaRoutes = require("./routers/mediaRouter");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("."));
app.use(morgan("dev"));

app.use("/api/v1/admins", adminRoutes);
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/articles", articleRoutes);
app.use("/api/v1/media", mediaRoutes);
app.use("/", swaggerRoutes);

module.exports = app;

// PASSWORD = T0IXJPWBrihRsQls
// DATABASE = mongodb+srv://islombek:<password>@cluster0.xyhpaf2.mongodb.net/?retryWrites=true&w=majority
// APP_URL = localhost:3000

// JWT_SECRET = thiswisjwtsecret
// JWT_EXPIRES = 90d
