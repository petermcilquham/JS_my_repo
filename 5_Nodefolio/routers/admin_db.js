import express from "express"
const router = express.Router()

import { connection } from "../database/connectSqlite.js"

router.get("/db/admins", async (req, res) => { //get all admins
    const getAdmins = await connection.all("SELECT * from admin")

    res.send(getAdmins)    
})

router.get("/db/getAdmin/:username", async (req, res) => { //get admin by username
    const getAdmin = await connection.get("SELECT username, password FROM admin WHERE username = ?", [req.params.username])

    if(getAdmin){
        res.send(getAdmin)
    } else {
        res.status(500).send()
    }  
})

router.post("/db/auth/admin", async (req, res) => { //create admin
    const adminToCreate = req.body

    connection.run("INSERT INTO admin (username, password) VALUES (?, ?)", [adminToCreate.username, adminToCreate.password])

    res.send(`${adminToCreate.username} er oprettet.`)
})

router.put("/db/auth/putAdmin/:id", async(req, res) => { //edit admin
    const result = await connection.run("UPDATE admin SET username = ?, password = ? WHERE id = ?", [req.body.username, req.body.password, req.params.id])

    if(result.changes === 0){
        res.status(500).send()
    } else {
        res.status(200).send()
    }
})

router.delete("/db/auth/delAdmin/:id", async (req, res) => { //delete admin by id
    const result = await connection.run("DELETE FROM admin WHERE id = ?", [req.params.id])

    if(result.changes === 0){
        res.status(500).send()
    } else {
        res.status(200).send()
    }
})



export default router