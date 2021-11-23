const menu = document.getElementById("nav")
const navLogout = document.createElement("a")
navLogout.innerHTML = "Logout"
navLogout.href = "/logout"
menu.appendChild(navLogout)

function showProjectCreate() {
    document.getElementById("addProjectInput").classList.toggle("hidden")
    document.getElementById("editProjectInput").classList.add("hidden")
    document.getElementById("deleteProjectInput").classList.add("hidden")
}
function showProjectEdit() {
    document.getElementById("editProjectInput").classList.toggle("hidden")
    document.getElementById("addProjectInput").classList.add("hidden")
    document.getElementById("deleteProjectInput").classList.add("hidden")
}
function showProjectDelete() {
    document.getElementById("deleteProjectInput").classList.toggle("hidden")
    document.getElementById("addProjectInput").classList.add("hidden")
    document.getElementById("editProjectInput").classList.add("hidden")
}

document.getElementById("showProjectCreate-btn").addEventListener("click", showProjectCreate)
document.getElementById("showProjectEdit-btn").addEventListener("click", showProjectEdit)
document.getElementById("showProjectDelete-btn").addEventListener("click", showProjectDelete)

function addProject(){
    fetch("/db/auth/projects", {
        method: "POST",
        mode: "cors",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify({
            name: document.getElementById("cName").value,
            category: document.getElementById("cCategory").value,
            technologies: document.getElementById("cTechnologies").value,
            desc: document.getElementById("cDesc").value,
            link: document.getElementById("cLink").value
        })
    }).then(response => {
        if(response.status === 200){
            toastr.success('Project created.', {
                timeOut: 2000, 
                fadeOut: 1000,})
        } else {
            toastr.error('Something went wrong - try again.', {
                timeOut: 2000, 
                fadeOut: 1000,})
        }
    })
}
function editProject(){
    fetch(`/db/auth/putProject/${document.getElementById("editId").value}`, {
        method: "PUT",
        mode: "cors",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify({
            name: document.getElementById("eName").value,
            category: document.getElementById("eCategory").value,
            technologies: document.getElementById("eTechnologies").value,
            desc: document.getElementById("eDesc").value,
            link: document.getElementById("eLink").value
        })
    }).then(response => {
        if(response.status === 200){
            toastr.success('Project edited.', {
                timeOut: 2000, 
                fadeOut: 1000,})
        } else {
            toastr.error('Something went wrong - try again.', {
                timeOut: 2000, 
                fadeOut: 1000,})
        }
    })
}
function delProject(){
    fetch(`/db/auth/delProject/${document.getElementById("delId").value}`, {
        method: "DELETE",
        mode: "cors",
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then(response => {
        if(response.status === 200){
            toastr.success('Project deleted.', {
                timeOut: 2000, 
                fadeOut: 1000,})
        } else {
            toastr.error('Something went wrong - try again.', {
                timeOut: 2000, 
                fadeOut: 1000,})
        }
    })
}
document.getElementById("addProject-btn").addEventListener("click", addProject)
document.getElementById("editProject-btn").addEventListener("click", editProject)
document.getElementById("delProject-btn").addEventListener("click", delProject)