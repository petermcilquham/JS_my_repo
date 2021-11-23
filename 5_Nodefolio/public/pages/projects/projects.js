fetch("/db/projects")
.then(response => response.json())
.then(results => {
    //sort by category
    //console.log(projects.sort((a, b) => a.category.localeCompare(b.category)))

    const projectsWrapperDiv = document.getElementById("projectsWrapper")

    results.map(project => {
        const projectDiv = document.createElement("div")
        projectDiv.innerHTML = `
            <h3>${escapeHTML(project.name)}</h3> 
            <p>ID: ${project.id}</p>
            <p>Category: ${escapeHTML(project.category)}</p>
            <p>Technologies: ${escapeHTML(project.technologies)}</p>
            <p>Description: ${project.desc}</p>
            <p>Github link: ${project.link}</p>
        `
        projectsWrapperDiv.appendChild(projectDiv)
    })
})