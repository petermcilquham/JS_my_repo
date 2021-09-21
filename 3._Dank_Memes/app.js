const express = require("express");
const app = express();
app.use(express.json());

const dankMemes = [{
    topText: "Mom: We have Javascript at home",
    bottomText: "Javascript at home: Node.js"
}];

app.get("/dankmemes", (req, res) => {
    res.send({memes: dankMemes});
});

app.get("/dankmemes/:id", (req, res) => {
    res.send({memes: dankMemes[req.params.id]});
});

app.post("/dankmemes/post", (req, res) => {
    dankMemes.push(req.body);
    res.send(req.body);
});

app.delete("/dankmemes/del", (req, res) => {
    dankMemes.pop();
    res.send({memes: dankMemes});
})

app.delete("/dankmemes/del/:id", (req, res) => {
    dankMemes.splice(req.params.id, 1);
    res.send({memes: dankMemes});
});

app.put("/dankmemes/put/:id", (req, res) => {
    dankMemes[req.params.id] = req.body;
    res.send({memes: dankMemes});
});

app.patch("/dankmemes/patch:/id", (req, res) => {

});

app.listen(8080, (error) => {
    if (error) {console.log(error);}
    console.log("The server is running on port", 8080);
});