import express from "express"
const router = express.Router()

import { connection } from "../database/connectSqlite.js"

router.get("/db/projects", async (req, res) => { //get all projects
    const getProjects = await connection.all("SELECT * from projects")
 
    res.send(getProjects)
})

router.get("/db/getProject/:id", async (req, res) => { //get single project by id
    const getProject = await connection.get("SELECT id, name, category, technologies, desc, link FROM projects WHERE id = ?", [req.params.id])

    if(getProject){
        res.send(getProject)
    } else {
        res.status(500).send()
    }
})

router.post("/db/auth/projects", async (req, res) => { //create project
    const projectToCreate = req.body

    const result = await connection.run("INSERT INTO projects (name, category, technologies, desc, link) VALUES (?, ?, ?, ?, ?)", [projectToCreate.name, projectToCreate.category, projectToCreate.technologies, projectToCreate.desc, projectToCreate.link])
    if(result.changes === 0){
        res.status(500).send()
    } else {
        res.status(200).send()
    }
    //res.status(200).send()
})

router.put("/db/auth/putProject/:id", async(req, res) => { //edit project
    const result = await connection.run("UPDATE projects SET name = ?, category = ?, technologies = ?, desc = ?, link = ? WHERE id = ?",[req.body.name, req.body.category, req.body.technologies, req.body.desc, req.body.link, req.params.id])
    
    if(result.changes === 0){
        res.status(500).send()
    } else {
        res.status(200).send()
    }
})

router.delete("/db/auth/delProject/:id", async (req, res) => { //delete single project by id
    const result = await connection.run("DELETE FROM projects WHERE id = ?", [req.params.id])
    
    if(result.changes === 0){
        res.status(500).send()
    } else {
        res.status(200).send()
    }
})

router.delete("/db/delAllProjects", async (req, res) => { //empty table
    connection.run(`DELETE FROM projects`)

    res.status(200).send()
})

export default router