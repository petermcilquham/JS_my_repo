const express = require("express");
const app = express();
app.use(express.json());

const dankMemes = [{
    id: 1,
    topText: "Mom: We have Javascript at home",
    bottomText: "Javascript at home: Node.js"
}];

app.get("/dankmemes", (req, res) => {
    res.send({memes: dankMemes});
});

app.get("/dankmemes/:id", (req, res) => {
    res.send({memes: dankMemes[req.params.id]});
    //error handling hvis id ikke findes:
    // const foundMeme = dankMemes.find(dankMeme => dankMeme.id === Number(req.params.id));
    // foundMeme ? res.send(foundMeme) : res.sendStatus(404);
});

app.post("/dankmemes/post", (req, res) => {
    dankMemes.push(req.body);
    res.sendStatus(200);
});

app.delete("/dankmemes/del", (req, res) => {
    dankMemes.pop();
    res.sendStatus(200);
})

app.delete("/dankmemes/del/:id", (req, res) => {
    // const foundMeme = dankMemes.find(dankMeme => dankMeme.id === Number(req.params.id));
    // foundMeme ? dankMemes.splice(req.params.id, 1); : res.sendStatus(404);
    dankMemes.splice(req.params.id, 1);
    res.sendStatus(200);
});

app.put("/dankmemes/put/:id", (req, res) => {
    dankMemes.find(dankMeme => dankMeme.id === Number(req.params.id)) = req.body;
    res.sendStatus(200);
});

app.patch("/dankmemes/patch:/id", (req, res) => {
    let memeToUpdate;
    dankMemes = dankMemes.map(dankMeme => {
        if (dankMeme.id === Number(req.params.id)) {
            memeToUpdate = { ...dankMeme, ...req.body, id: dankMeme.id };
            return memeToUpdate;
        }
        return dankMeme;
    });
    memeToUpdate ? res.send(memeToUpdate): res.sendStatus(404);
});

app.listen(8080, (error) => {
    if (error) {console.log(error);}
    console.log("The server is running on port", 8080);
});