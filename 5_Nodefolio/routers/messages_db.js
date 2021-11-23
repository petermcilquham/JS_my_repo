import express from "express"
const router = express.Router()

import { connection } from "../database/connectSqlite.js"

router.get("/db/messages", async (req, res) => { //get all messages
    const getMessages = await connection.all("SELECT * from messages")
 
    res.send(getMessages)    
})

router.get("/db/getMessage/:id", async (req, res) => { //get single message by id
    const getMessage = await connection.get("SELECT name, email, phone, msg, date FROM messages WHERE id = ?", [req.params.id])
    
    if(getMessage){
        res.send(getMessage)
    } else {
        res.status(500).send()
    }
})

router.post("/db/messages", async (req, res) => { //create message
    const messageToCreate = req.body

    connection.run("INSERT INTO messages (name, email, phone, msg, date) VALUES (?, ?, ?, ?, ?)", [messageToCreate.name, messageToCreate.email, messageToCreate.phone, messageToCreate.msg, new Date().toLocaleString()])
    
    res.status(200).send()
})

router.delete("/db/auth/pruneMessages", async (req, res) => { //delete messages older than 30 days
    connection.run(`DELETE FROM messages WHERE date <= datetime("now", "-30 days")`)

    res.send()
})


export default router