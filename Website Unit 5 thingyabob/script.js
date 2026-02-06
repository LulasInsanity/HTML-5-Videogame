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








// identify sorting buttons (make sure the #IDs below match your buttons in html)
var sortAZBtn = document.querySelector("#sort-az");
var sortZABtn = document.querySelector("#sort-za");


// sort click handlers for buttons, add two buttons to your html and give them the same IDs as below
sortAZBtn.addEventListener("click", function () {
  sortByTitle("az");
});
  sortZABtn.addEventListener("click", function () {
  sortByTitle("za");
});


// sort function
function sortByTitle(direction) {
  // data should be the variable that stores the list of data, make sure the name matches what you have
  data.sort(function (a, b) {
    var titleA = String(a.title).toLowerCase();
    var titleB = String(b.title).toLowerCase();


    if (titleA < titleB) {
      if (direction == "az") {
        return -1;
      } else {
        return 1;
      }
    }


    if (titleA > titleB) {
      if (direction == "az") {
        return 1;
      } else {
        return -1;
      }
    }


    return 0;
  });


  makeCards();
}
