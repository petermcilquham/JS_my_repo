import express from "express"
const router = express.Router()
import bcrypt from "bcrypt"

router.post("/api/login", async (req, res) => {
    if(req.body.username === req.body.usernameToCheckAgainst && await bcrypt.compare(req.body.password, req.body.passwordToCheckAgainst)){
        req.session.isLoggedIn = true
        return res.status(200).send()
    } else {
        return res.status(401).send()
    }
})

/* router.get("/api/isLoggedIn", (req, res) => {
    res.send({adminLoggedIn: req.session.isLoggedIn || false})
}) */

/* router.get("/api/logout", (req, res) => {
    req.session.destroy()
    res.send(loginPage)
}) */


export default router