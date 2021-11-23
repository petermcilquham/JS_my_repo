import { createConnection } from "./connectSqlite.js"

(async () => {
    const connection = await createConnection()
    
    await connection.exec("DROP TABLE IF EXISTS projects")
    await connection.exec("DROP TABLE IF EXISTS messages")
    await connection.exec("DROP TABLE IF EXISTS admin")

    const projectsTable = `
        CREATE TABLE projects (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            category TEXT,
            technologies TEXT,
            desc TEXT,
            link TEXT
        )`

    const messagesTable = `
        CREATE TABLE messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone int,
            msg TEXT,
            date TEXT
        )`

    const adminTable = `
        CREATE TABLE admin (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username NOT NULL,
            password NOT NULL
        )`

    await connection.exec(projectsTable)
    await connection.exec(messagesTable)
    await connection.exec(adminTable)

    await connection.run("INSERT INTO projects (name, category, technologies, desc, link) VALUES ('Node.js Recap', 'Node.js', 'Node.js, Html, CSS', 'Ipsum lorem', 'www.link.com')")
    await connection.run("INSERT INTO projects (name, category, technologies, desc, link) VALUES ('Nodefolio', 'Node.js', 'Node.js, Html, CSS', 'Nodefolio project that we have built throughout the semester.', '')")
    await connection.run("INSERT INTO projects (name, category, technologies, desc, link) VALUES ('3rd semester project', 'Java', 'Java, Thymeleaf, CSS, MySQL', 'Cinema website project.', '')")
})() 