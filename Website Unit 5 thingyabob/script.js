console.log("js console");

let data;
let grid = document.querySelector(".grid-container");

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       data = JSON.parse(xhttp.responseText);
       console.log(data);

       data.forEach(function(game){
        let card = document.createElement("div");
        card.classList.add("card");
card.style.backgroundRepeat="no-repeat"
card.style.backgroundSize="contain"
card.style.textAlign="left"

        let textData =
        "<div class='game-title'>" + game.title + "</div>" +
        "<span>" +
        "Developer: " + game.publisher +
        "</br>" +
        "Release Date: " + game.release;

        card.innerHTML = textData;

        if(game.image){
            card.style.backgroundImage = "url(" + game.image 
        + ")";
        }
        grid.appendChild(card);
       })
    }
};
xhttp.open("GET", "info.json", true);
xhttp.send();