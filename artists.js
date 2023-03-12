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

    createArtistsList();
  })
  .catch((error) => console.error(error));

function createArtistsList() {
  const section = document.getElementById("artists");

  const header = document.createElement("h1");

  header.textContent = "Artists";

  header.classList.add("artists-header");

  section.appendChild(header);

  const artistsDiv = document.createElement("div");

  artistsDiv.className = "artists-div";

  section.appendChild(artistsDiv);

  for (let i = 0; i < artistData.length; i++) {
    const link = document.createElement("a");

    link.href = `gallery.html?artist=${i}`;

    link.className = 'artist-link';

    artistsDiv.appendChild(link);

    const artistDiv = document.createElement("div");

    artistDiv.className = "artist-div";

    link.append(artistDiv);

    const artist_img = document.createElement("img");

    artist_img.src = "assets/".concat(artistData[i]["artist_img"]);

    artist_img.classList.add("artist-img");

    artistDiv.appendChild(artist_img);

    const artist_name = document.createElement("p");

    artist_name.textContent = artistData[i]["name"];

    artist_name.classList.add("artist-name");

    artistDiv.appendChild(artist_name);
  }
}
