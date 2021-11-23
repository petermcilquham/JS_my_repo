function sendContactMessage() {
    fetch("/api/contact", {
        method: "POST",
        mode: "cors",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify({
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            msg: document.getElementById("msg").value
        })
    }).then(response => {
        if(response.status === 200){
            toastr.success('Your message is sent.', 'Thank your for contacting me!', {
                timeOut: 2000, 
                fadeOut: 1000,
                onHidden: function() { window.location.href = "/contact" }})
        } else {
            console.log("Error sending the contact message", response.status)
        }
    })

    //create message in db
    fetch("/db/messages", {
        method: "POST",
        mode: "cors",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify({
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            msg: document.getElementById("msg").value
        })
    })
}

document.getElementById("contact-btn").addEventListener("click", sendContactMessage)

const input = document.getElementById("msg")
// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Trigger the button element with a click
      document.getElementById("contact-btn").click()
    }
}) 