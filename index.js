const express = require("express");
const cors = require("cors");
const characterController = require("./Controllers/Characters")

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.redirect("/characters");
});

app.use("/characters/", characterController);

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
});