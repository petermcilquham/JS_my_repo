console.log("meow meow");

//knap der tilføjer nye facts
function getCatFact(){
    fetch("https://catfact.ninja/fact")
    //.then(response => console.log(response))
    .then(response => response.json())
    .then(result => {
        //console.log(result)
        const catFactsDiv = document.getElementById("catfacts");
        catFactsDiv.innerText = result.fact;
    });
}

//tilføj automatisk ny catfact hvert sekund (liste) eller ny fact hver 10 sekunder
setInterval(() => {
    fetch("https://catfact.ninja/fact")
    .then(response => response.json())
    .then(result => {
        catFact = document.createElement("li");
        catFact.appendChild(document.createTextNode(result.fact));
    });
    document.getElementById("catFactsList").appendChild(catFact);
}, 5000);