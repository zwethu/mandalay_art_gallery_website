var exhibtionUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSGv3CZajv7LkLXf_IaUVh29irPrwGh-IQ9s3Hef75987JmZJgaMR_7evbvzUjExc3hKuefhoKQUN90/pub?output=csv";
var artistUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_k9VdP0AFdKz0CMbPgCvn-Sb5bowNzWEccexOg1vzzNLrWdyxmCmAACq5mNanf8goOxjyhPJWxN_o/pub?output=csv";

var paintingUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vT-UfEUh8HHlX9hHITjcSPL7cv2yV5WSEYsOEObE8gD4h9jG-rLeTZcTXmPds_ks1biYWw1WNKo0ubv/pub?output=csv";

var bioUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSXXprAoYqZ_t_pIIMTGlO_AuMDXBW4Na9u1Gn1qlI2_9xD4Qy-y6Esd2FiBe4TvIgb71dDX3tMsN0Z/pub?output=csv";

var exhibitionData = [];
var artistData = [];
var paintingData = [];
var bio = [];

var fetchData = (url, dataArray) => {
  return fetch(url)
    .then((response) => response.text())
    .then((data) => {
      data = data.replace(/\r/g, "");
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
  fetchData(exhibtionUrl, exhibitionData),
  fetchData(artistUrl, artistData),
  fetchData(paintingUrl, paintingData),
  fetchData(bioUrl, bio),
])
  .then(() => {
    console.log();
    const index = new URLSearchParams(window.location.search).get('exhibition');
    createExhibitionHeader(index);
    createBio(exhibitionData[index]['artists'].split('_'));
  })
  .catch((error) => console.error(error));

  function createExhibitionHeader(exhibitionId){
    const section = document.getElementById("exhibition");

    const exhibitionHeading = document.createElement('div');

    exhibitionHeading.id = 'exhibition-header';

    section.appendChild(exhibitionHeading);

    const exhibitionTitle = document.createElement('h1');

    exhibitionTitle.textContent = exhibitionData[exhibitionId]['title'].replaceAll("&#44",",");

    exhibitionTitle.classList.add('exhibition-name');

    exhibitionHeading.appendChild(exhibitionTitle);

    const dateAndPlaceDiv = document.createElement('div');

    dateAndPlaceDiv.className = 'exhibition-date-place-div';
  
    exhibitionHeading.appendChild(dateAndPlaceDiv);
  
    const place = document.createElement("p");
  
    place.className = "exhibition-place";
  
    place.textContent = exhibitionData[exhibitionId]["place"];
  
    dateAndPlaceDiv.appendChild(place);
  
    const date = document.createElement("p");
  
    date.className = "exhibition-date";
  
    date.textContent = exhibitionData[exhibitionId]["date"];
  
    dateAndPlaceDiv.appendChild(date);

    const artistsText = document.createElement('p');

    artistsText.textContent = 'Artists';

    artistsText.classList.add('artistsText');

    exhibitionHeading.appendChild(artistsText);

    let data = exhibitionData[exhibitionId]['artists'].split('_');

    for(let i = 0 ; i < data.length ; i++){
      const artistName = document.createElement('p');
      artistName.textContent = artistData[data[i]]['name'];
      artistName.classList.add('artist-name');
      exhibitionHeading.appendChild(artistName);
    }
  }

function createBio(artists) {
  for (let i = 0; i < artists.length; i++) {
    let bioTitles = [];

    let bioContents = [];

    let paintingList = [];

    bioTitles.push(bio[artists[i]]["title"].split("_"));

    bioContents.push(bio[artists[i]]["content"].split("_"));

    paintingList = artistData[artists[i]]["paintings"].split("-");

    artistData[artists[i]]["paintings"].split("-")[1];

    const section = document.getElementById("exhibition");

    const artist = document.createElement("section");

    artist.classList.add("artist-sec");

    section.appendChild(artist);

    const artistImgDiv = document.createElement("div");

    artistImgDiv.className = "artist-img-div";

    artist.appendChild(artistImgDiv);

    const artistImg = document.createElement("img");

    artistImg.className = "bio-img";

    artistImg.src = "assets/".concat(artistData[i]["artist_img"]);

    artistImgDiv.appendChild(artistImg);

    const bioDiv = document.createElement("div");

    bioDiv.className = "bio-div";

    artist.appendChild(bioDiv);

    for (let j = 0; j < bioTitles[0].length; j++) {
      const title = document.createElement("h5");

      title.classList.add("bio-title");

      title.textContent = bioTitles[0][j];

      bioDiv.appendChild(title);

      const bioContent = document.createElement("p");

      bioContent.textContent = bioContents[0][j].replaceAll("&#44", ",");

      bioContent.className = "bio-content";

      bioDiv.appendChild(bioContent);
    }

    const title = document.createElement("h1");

    title.textContent = "Gallery";

    title.classList.add("gallery-title");

    section.append(title);

    const galleryDiv = document.createElement("div");

    galleryDiv.classList.add("gallery-div");

    section.append(galleryDiv);

    let id = artistData[artists[i]]["paintings"].split("-");

    let start = parseInt(id[0]);

    let end = parseInt(id[1]);

    for (var j = start; j <= end; j++) {
      let link = document.createElement("a");

      link.setAttribute("target", "_blank");

      link.href = "assets/".concat(paintingData[j]["img_url"]);

      link.classList.add("gallery-img-link");

      galleryDiv.appendChild(link);

      let div = document.createElement("div");

      div.classList.add("gallery-img-div");

      link.appendChild(div);

      let img = document.createElement("img");

      img.src = "assets/".concat(paintingData[j]["img_url"]);

      img.classList.add("gallery-img");

      div.appendChild(img);

      let artist = document.createElement("p");

      artist.textContent = "Artist - ".concat(paintingData[j]["name"]);

      div.appendChild(artist);

      let caption = document.createElement("p");

      caption.textContent = "Title - ".concat(paintingData[j]["title"]);

      div.appendChild(caption);

      let measurement = document.createElement("p");

      measurement.textContent = "Size - "
        .concat(paintingData[j]["width"])
        .concat('" ')
        .concat(paintingData[j]["height"])
        .concat('"'); //

      div.appendChild(measurement);

      let other = document.createElement("p");

      other.textContent = paintingData[j]["size"]
        .concat(" - ")
        .concat(paintingData[j]["drawing type"]); //

      div.appendChild(other);

      let price = document.createElement("p");

      price.textContent = "Price - ".concat(paintingData[j]["price"]);

      div.appendChild(price);

      const status = document.createElement("p");

      status.textContent = paintingData[i]["status"];

      status.className = "painting-status";

      div.appendChild(status);
    }
  }
}
