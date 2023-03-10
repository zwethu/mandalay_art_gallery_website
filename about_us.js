var exhibtionUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSGv3CZajv7LkLXf_IaUVh29irPrwGh-IQ9s3Hef75987JmZJgaMR_7evbvzUjExc3hKuefhoKQUN90/pub?output=csv";
var artistUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_k9VdP0AFdKz0CMbPgCvn-Sb5bowNzWEccexOg1vzzNLrWdyxmCmAACq5mNanf8goOxjyhPJWxN_o/pub?output=csv";

var paintingUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vT-UfEUh8HHlX9hHITjcSPL7cv2yV5WSEYsOEObE8gD4h9jG-rLeTZcTXmPds_ks1biYWw1WNKo0ubv/pub?output=csv";

var bioUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSXXprAoYqZ_t_pIIMTGlO_AuMDXBW4Na9u1Gn1qlI2_9xD4Qy-y6Esd2FiBe4TvIgb71dDX3tMsN0Z/pub?output=csv";

var exhbitionData = [];
var artistData = [];
var paintingData = [];
var bio = [];

var fetchData = (url, dataArray) => {
  return fetch(url)
    .then((response) => response.text())
    .then((data) => {
      const rows = data.split("\n");
      const headers = rows[0].split(",");
      const result = rows.slice(1).map((row) => {
        const obj = {};
        const values = row.split(",");
        headers.forEach((header, i) => (obj[header] = values[i]));
        return obj;
      });
      dataArray.push(...result);
    });
};

Promise.all([
  fetchData(exhibtionUrl, exhbitionData),
  fetchData(artistUrl, artistData),
  fetchData(paintingUrl, paintingData),
  fetchData(bioUrl, bio),
])
  .then(() => {
    createBio();
    // do something with the data, e.g. append to the DOM
  })
  .catch((error) => console.error(error));

function createBio() {
  for (let i = 0; i < 1; i++) {
    let bioTitles = [];
    let bioContents = [];
    let paintingList = [];

    bioTitles.push(bio[i]["title"].split("_"));

    bioContents.push(bio[i]["content\r"].split("_"));

    paintingList = artistData[i]["paintings"].split("-");

    let startId = paintingList[0];

    let endId = paintingList[1];

    const section = document.getElementById("about-us");

    const artist = document.createElement("section");

    artist.classList.add("artist-sec");

    section.appendChild(artist);

    const artistImgDiv = document.createElement("div");

    artistImgDiv.className = "artist-img-div";

    artist.appendChild(artistImgDiv);

    const artistImg = document.createElement("img");

    artistImg.className = "artist-img";

    artistImg.src = "assets/".concat(artistData[0]["artist_img"]);

    artistImgDiv.appendChild(artistImg);

    const bioDiv = document.createElement("div");

    bioDiv.className = "bio-div";

    artist.appendChild(bioDiv);

    for (let j = 0; j < bioTitles[0][1].length; j++) {
      const title = document.createElement("h5");

      title.classList.add("bio-title");

      title.textContent = bioTitles[i][j];

      bioDiv.appendChild(title);

      const bioContent = document.createElement("p");

      bioContent.textContent = bioContents[i][j];

      bioContent.className = "bio-content";

      bioDiv.appendChild(bioContent);
    }

    const title = document.createElement("h1"); // create h1 for header

    title.textContent = "Gallery"; // give h1 value of "Gallery"

    title.classList.add("gallery-title"); //give the class name "gallery-title to that h1 element"

    section.append(title); // add created element title(header) into the section element

    const galleryDiv = document.createElement("div"); //create container for all img div

    galleryDiv.classList.add("gallery-div"); //class name for galleryDiv

    section.append(galleryDiv); // add div to the section

    //loop for the every data in the imageData array
    for (let j = startId; j <= endId; j++) {
      let link = document.createElement("a"); // create a tag to be clickable

      link.setAttribute("target", "_blank"); // target blank for new tab

      link.href = "assets/".concat(paintingData[j]["img_url"]); //

      link.classList.add("gallery-img-link"); // give the class name "gallery-img-link"

      galleryDiv.appendChild(link); //cover div with a tag so it will be clickable

      let div = document.createElement("div"); //create container for the image and other data

      div.classList.add("gallery-img-div"); //give the class name "gallery-img-div" to the div

      link.appendChild(div); // add div

      let img = document.createElement("img"); // create img element

      img.src = "assets/".concat(paintingData[j]["img_url"]);

      img.classList.add("gallery-img"); // give class name to the image

      div.appendChild(img); // add img to the div

      let artist = document.createElement("p"); // create p element for artist

      artist.textContent = "Artist - ".concat(paintingData[j]["name"]); //

      div.appendChild(artist);

      let caption = document.createElement("p"); //create p for image title

      caption.textContent = "Title - ".concat(paintingData[j]["title"]); //

      div.appendChild(caption); //add caption to the div

      let measurement = document.createElement("p"); //create p for witdh and height data

      measurement.textContent = "Size - "
        .concat(paintingData[j]["width"])
        .concat('" ')
        .concat(paintingData[j]["height"])
        .concat('"'); //

      div.appendChild(measurement); //add measurement to div

      let other = document.createElement("p"); //create p for other data; size and drawing type

      other.textContent = paintingData[j]["size"]
        .concat(" - ")
        .concat(paintingData[j]["drawing type"]); //

      div.appendChild(other); //add that element to the div

      let price = document.createElement("p"); //create p for price

      price.textContent = "Price - ".concat(paintingData[j]["price"]); //

      div.appendChild(price); // add price to the img
    }
  }
}
