const express = require("express");
const routes = require("./src/routes");
const cors = require("cors");
require("./src/database");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Server up at http://localhost:${PORT}`));
