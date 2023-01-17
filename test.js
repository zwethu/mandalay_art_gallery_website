const imageData = [
  ["assets/images/a.png", "ag ag", "1200$"],
  ["assets/images/a.png", "mg ag", "1000$"],
  ["assets/images/a.png", "ag ag", "1200$"],
  ["assets/images/a.png", "ag ag", "1200$"],
  ["assets/images/a.png", "ag ag", "1200$"],
  ["assets/images/a.png", "ag ag", "1200$"],
  ["assets/images/a.png", "ag ag", "1200$"],
  ["assets/images/a.png", "ag ag", "1200$"],
  ["assets/images/a.png", "ag ag", "1200$"],
  ["assets/images/a.png", "ag ag", "1200$"],
  ["assets/images/a.png", "ag ag", "1200$"],
  ["assets/images/a.png", "ag ag", "1200$"],
  ["assets/images/a.png", "ag ag", "1200$"],
];


var section = document.getElementById("gallery");
for (var i = 0 ; i < imageData.length; i++){
  var div = document.createElement("div");
div.classList.add("gallery-div");
section.appendChild(div)
var img = document.createElement("img");
img.src = imageData[i][0];
div.appendChild(img);
var author = document.createElement("p");
author.textContent = imageData[i][1];
div.appendChild(author);
}
