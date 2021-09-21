const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send({ mindIsBlown: true });
});

// create a new route on the endpoint "/adventureTime" 
// send back data (data type must be json)
app.get("/adventureTime", (req, res) => {
    res.send({ adventure: "Time" });
});

//req = request, res = response
//send json tilbage i rest api'er
app.get("/frontpage", (req, res) => {
    res.send({message: "Welcome!"});
});

app.post("/messages", (req, res) => {
    res.send(req.body);
});


app.listen(3000);
