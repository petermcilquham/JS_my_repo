const express = require('express');
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/html/index.html");
});

app.get("/terminal", (req, res) => {
    res.sendFile(__dirname + "/public/html/terminal.html");
});

app.get("/code", (req, res) => {
    res.sendFile(__dirname + "/public/html/code.html");
});

app.get("/tools", (req, res) => {
    res.sendFile(__dirname + "/public/html/tools.html");
});

app.get("/theory", (req, res) => {
    res.sendFile(__dirname + "/public/html/theory.html");
});

app.get("/research", (req, res) => {
    res.sendFile(__dirname + "/public/html/research.html");
});



const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", PORT);
});