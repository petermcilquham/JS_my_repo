const express = require("express");
const app = express();

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

app.get("/getDay", (req, res) => {
    const date = new Date();
    //new Date().toLocaleDateString('da-DK', { weekday: 'long' })
    //res.send({day: Intl.DateTimeFormat('en-us', {weekday: 'long'}).format(date)});
    res.send({day: days[date.getDay()]});
});

app.listen(3000);