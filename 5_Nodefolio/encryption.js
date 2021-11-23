import bcrypt from "bcrypt"

const saltRounds = 12

//gem aldrig plaintext passwords noget sted - kun hashede passwords i database

async function createAdmin(username, password) { //når bruger registrerer sig: hash koden og gem i database
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    fetch("/db/admin", {
        method: "POST",
        mode: "cors",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify({
            username: username,
            password: hashedPassword
        })
    })
}


export default {}