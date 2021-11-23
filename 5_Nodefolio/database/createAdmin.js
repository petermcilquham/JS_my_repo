import bcrypt from "bcrypt"
import { createConnection } from "./connectSqlite.js"

(async () => {
    const saltRounds = 12
    const hashedPassword = await bcrypt.hash("", saltRounds)

    const connection = await createConnection()
    await connection.run(`INSERT INTO admin (username, password) VALUES ("admin", "${hashedPassword}")`)
})() 