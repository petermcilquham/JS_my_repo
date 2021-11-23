fetch("./assets/cv.txt")
.then(response => response.text())
.then(result => {
    document.getElementById("cv_text").innerText = result
})

