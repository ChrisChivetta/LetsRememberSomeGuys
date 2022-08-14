const path = require('path');

const express = require("express");

app.use(express.static(path.resolve(__dirname, '../client/build')));

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello Chris, Love Server" });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});