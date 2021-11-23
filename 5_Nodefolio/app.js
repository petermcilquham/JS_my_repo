import express from "express"
import helmet from "helmet"
import _ from "./encryption.js"
import session from "express-session"
import rateLimit from "express-rate-limit"
const app = express()
const defaultRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 200 // limit each IP to x requests per windowMs
})
const authRateLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 50
})

//app.use(helmet())
app.use(helmet({contentSecurityPolicy: false,})) //contentSecurity blokerer toastr
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(defaultRateLimiter)
app.use("/auth", authRateLimiter)
app.use("/auth", isLoggedIn)
app.use("/db/auth", isLoggedIn)
app.use(express.static("public"))
app.use(express.json()) //parse json
app.use(express.urlencoded({extended: true})) //parse form data

/* import routers  */
import contactRouter from "./routers/contact.js"
import projectsDBRouter from "./routers/projects_db.js"
import messageDBRouter from "./routers/messages_db.js"
import adminDBRouter from "./routers/admin_db.js"
import loginRouter from "./routers/login.js"

/* use routers */
app.use(contactRouter)
app.use(projectsDBRouter)
app.use(messageDBRouter)
app.use(adminDBRouter)
app.use(loginRouter)

// '{createPage}' henter valuen af det objekt der fås ved 'require....js)' frem for at hente hele objektet. 'destructuring'
import {createPage} from "./render.js"

/* ready the pages */
const frontpagePage = createPage("frontpage/frontpage.html", {title: "Nodefolio | Welcome", css: "../pages/frontpage/frontpage.css"})
const cvPage = createPage("cv/cv.html", {css: "../pages/cv/cv.css"})
const projectsPage = createPage("projects/projects.html", {css: "../pages/projects/projects.css"})
const contactPage = createPage("contact/contact.html", {css: "../pages/contact/contact.css"})
const loginPage = createPage("login/login.html", {css: "../pages/login/login.css"})
const adminPage = createPage("admin/admin.html", {title: "Nodefolio | Admin", css: "../pages/admin/admin.css"})

app.get("/", (req, res) => {
    res.send(frontpagePage)
    //res.sendFile(__dirname + "/public/pages/frontpage/frontpage.html")
})

app.get("/cv", (req, res) => {
    res.send(cvPage)
})

app.get("/projects", (req, res) => {
    res.send(projectsPage)
})

app.get("/contact", (req, res) => {
    res.send(contactPage)
})

app.get("/login", (req, res) => {
    res.send(loginPage)
})

function isLoggedIn(req, res, next){
    if(req.session.isLoggedIn === true){
        next()
    } else {
        return res.redirect("/login")
    }
}
app.get("/auth/admin", (req, res) => {
    res.send(adminPage)
})

app.get("/logout", (req, res) => {
    req.session.destroy()
    res.send(frontpagePage)
})

app.get("/auth/*", (req, res) => {
    res.send(loginPage)
})
app.get("/*", (req, res) => {
    res.send(frontpagePage)
})



const PORT = process.env.PORT || 8080
app.listen(PORT, (error) => {
    if (error) {
        console.log(error)
    }
    console.log("Server is running on port", PORT)
})