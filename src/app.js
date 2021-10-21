const express = require("express");
const cors = require("cors");
const manRouter = require("./routers/men");
require("./db/conn");
const app = express();
app.use(express.json());
app.use(cors());
app.use(manRouter);

const port = process.env.PORT || 4000;
app.listen(port);
