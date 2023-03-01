const { artistData } = require("./artists_data.js");

let exhibitionsData = [];

const currentExhibitionsData = [
  {
    title: "Myeik Winn Htain, Nang (Tiger Nang) \n Art Exhibition",
    date: "11 - 1 - 2023 to 17 - 1 - 2023",
    place: "Mandalay Art Gallery",
    exhibition_img: "assets/images/background.jpg",
    exhibition_id: 0,
    artists: [artistData[0], artistData[1]],
  },
];

const previousExhibitionsData = [
  {
    title: "Myeik Winn Htain, Nang (Tiger Nang) \n Art Exhibition",
    date: "12 - 1 - 2023 to 17 - 1 - 2023",
    place: "Mandalay Art Gallery",
    exhibition_img: "assets/images/background.jpg",
    exhibition_id: 0,
    artists: [artistData[0], artistData[2]],
  },
  {
    title: "Myeik Winn Htain, Nang (Tiger Nang) \n Art Exhibition",
    date: "13 - 1 - 2023 to 17 - 1 - 2023",
    place: "Mandalay Art Gallery",
    exhibition_img: "assets/images/background.jpg",
    exhibition_id: 0,
    artists: [artistData[1], artistData[2]],
  },
];

exhibitionsData = [currentExhibitionsData,previousExhibitionsData];


module.exports = { exhibitionsData };

console.log(exhibitionsData [1][1].artists);