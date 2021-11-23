/* (async() => {
    if(redirectFromAuthAdmin === true) {
        toastr.warning('Unauthorized access.', 'Please log in.', {
            timeOut: 2000,
            fadeOut: 1000,
            positionClass: "toast-top-center"})
    }
    redirectFromAuthAdmin = false
})() */

function fetchData() {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    fetch(`/db/getAdmin/${username}`)
    .then(response => {
        if(response.status === 200) {
            response.json()
            .then(results => {
                postLoginData(username, password, results.username, results.password)
            })
        } else {
            toastr.warning('Try again', 'Wrong username.', {
                timeOut: 2000,
                fadeOut: 1000,
                positionClass: "toast-top-center",
                onHidden: function() { }})
            document.getElementById("password").value = ""
        }
    })
}

function postLoginData(username, password, correctUsername, correctPassword) {
    fetch("/api/login", {
        method: "POST",
        mode: "cors",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify({
            username: username,
            password: password,
            usernameToCheckAgainst: correctUsername,
            passwordToCheckAgainst: correctPassword
        })
    })
    .then(response => {
        if(response.status === 200){
            toastr.success('You are logged in..', 'Success.', {
                timeOut: 700, 
                fadeOut: 200,
                positionClass: "toast-top-center",
                onHidden: function() { window.location.href = "/auth/admin" }})
        } else {
            toastr.warning('Try again', 'Wrong password.', {
                timeOut: 2000,
                fadeOut: 1000,
                positionClass: "toast-top-center"})
            document.getElementById("password").value = ""
        }
    }) 
}

document.getElementById("login-btn").addEventListener("click", fetchData)

const input = document.getElementById("password")
input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      document.getElementById("login-btn").click()
    }
}) 