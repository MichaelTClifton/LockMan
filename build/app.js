"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var PORT = 3000;
app.get("/", function (req, res) {
    res.send("Hello world!");
});
app.listen(PORT, function () {
    console.log("Example app running on port " + PORT);
});
