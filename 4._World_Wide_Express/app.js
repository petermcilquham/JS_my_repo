const { query } = require('express');
const express = require('express');
const app = express();

// tillad at browseren/klienten tilgår public mappen
app.use(express.static("public"));

app.get("/", (req, res) => {
    // this also works:
    // res.sendFile("index.html", { root: __dirname });
    res.sendFile(__dirname + "/public/index/index.html");
});

app.get("/cleo", (req, res) => {
    res.sendFile(__dirname + "/public/cleo/cleo.html");
});

app.get("/teenageroom", (req, res) => {
    res.sendFile(__dirname + "/public/teenageroom/teenageroom.html");
});
app.get("/creditor", (req, res) => {
    res.send({message: "You are indebted and you won't get what you want."});
});

app.get("/sausage", (req, res) => {
    //redirect to creditor if I don't have 25 DKK on me
    if (req.query.money < 25) {
        res.redirect("/creditor");
    } else {
        res.send({sausage: "Indianer i kano"});
    }
});

//console.log(process.env.PORT);
const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", PORT);
});
