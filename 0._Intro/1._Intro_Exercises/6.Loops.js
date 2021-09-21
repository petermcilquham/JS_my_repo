const favoriteThings = ["Cleo", 420, true, "\u2606"];

//for loop (når man skal tælle over et range)
for (let i=0; i<=favoriteThings.length; i++){
    console.log(favoriteThings[i]);
}

//enhanced for loop: (in=index, of=elements)
for (i in favoriteThings){
    console.log(i);
}

//forEach loop (brug hvis man ikke har data og ikke skal gøre noget med dataen uden for looped)
favoriteThings.forEach((thing) => console.log(thing)); 
// const favoriteThinsWithCommentary = [];
// favoriteThings.forEach(favoriteThing => favoriteThinsWithCommentary.push(`Ooh i like ${favoriteThing}`));
// console.log(favoriteThinsWithCommentary);


//map (better than forEach loop)
const subjectiveFavoriteThings = favoriteThings.map(favoriteThing => `Ooh i like ${favoriteThing}`);
console.log(subjectiveFavoriteThings);

//contains
console.log(favoriteThings.indexOf("Cleo"));

//filter (filtrerer fra)
const longFavoriteThings = favoriteThings.filter(favoriteThing => favoriteThing.length > 3);
console.log(longFavoriteThings);