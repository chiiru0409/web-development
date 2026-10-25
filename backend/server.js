require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
    res.json({
        message: "Success! Frontend and backend are connected."
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});