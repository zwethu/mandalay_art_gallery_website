const { bioData } = require("./bio_data.js");
const { paintingsData } = require("./paintings_data.js");

const artistData = [
  {
    name: "Tiger Nang",
    id: 0,
    paintings: paintingsData[1],
    artist_img: "images/bishamonten.jpg",
    bio: bioData[0],
  },
  {
    name: "Tiger Nang",
    id: 1,
    paintings: paintingsData[1],
    artist_img: "images/bishamonten.jpg",
    bio: bioData[1],
  },
  {
    name: "Tiger Nang",
    id: 2,
    paintings: paintingsData[2],
    artist_img: "images/bishamonten.jpg",
    bio: bioData[2],
  },
];

module.exports = {artistData};


// console.log(artistData[1]);


