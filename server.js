const express = require("express");
const app = express();
const fetch = require("node-fetch");
const cors = require("cors");
const https = require("https");

const httpsAgent = new https.Agent({
   rejectUnauthorized: false,
});

app.use(cors());

app.post("agent: httpsAgent", async (req, res) => {
   const response = await fetch("https://volfiplanerapi.pluggramming.de:5555/api/Calculate");
   res.json(await response.json());
});

app.listen(3000, () => {
   console.log("Listening on Port 3000");
});
