const express = require("express");
const connect = require("./config/db");
const app = express();
const cors = require("cors");
connect();

app.use(express.json({ extended: false }));
app.use(cors());

app.get("/", (req, res) => res.send("api running"));

const PORT = process.env.PORT || 5000;

app.use("/user", require("./routes/user.route"));

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
