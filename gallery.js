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
      data = data.replace(/\r/g, '');
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
    const index = new URLSearchParams(window.location.search).get("artist");
    var list = artistData[index]['paintings'].split('-');
    var start = parseInt(list[0]);
    var end = parseInt(list[1]);
    createGallery(start,end);  
  })
  .catch((error) => console.error(error));

function createGallery(startPoint, endPoint) {
  const section = document.getElementById("gallery"); 

  const title = document.createElement("h1"); 

  title.textContent = paintingData[startPoint]['name'].concat("'s Paintings");

  title.classList.add("gallery-title"); 

  section.append(title); 

  const galleryDiv = document.createElement("div"); 

  galleryDiv.classList.add("gallery-div"); 

  section.append(galleryDiv); 


  for (let i = startPoint; i <= endPoint; i++) {
    const link = document.createElement("a"); 

    link.setAttribute("target", "_blank"); 

    link.href = "assets/".concat(paintingData[i]["img_url"]); 

    link.classList.add("gallery-img-link"); 

    galleryDiv.appendChild(link);

    const div = document.createElement("div");

    div.classList.add("gallery-img-div"); 

    link.appendChild(div);

    const img = document.createElement("img"); 

    img.src = "assets/".concat(paintingData[i]["img_url"]); 

    img.classList.add("gallery-img"); 

    div.appendChild(img); 

    const artist = document.createElement("p");

    artist.textContent = "Artist - ".concat(paintingData[i]["name"]);

    div.appendChild(artist);

    const caption = document.createElement("p");

    caption.textContent = "Title - ".concat(paintingData[i]["title"]); 

    div.appendChild(caption); 

    const measurement = document.createElement("p"); 

    measurement.textContent = "Size - "
      .concat(paintingData[i]["width"])
      .concat('" ')
      .concat(paintingData[i]["height"])
      .concat('"');

    div.appendChild(measurement);

    const other = document.createElement("p"); 

    other.textContent = paintingData[i]["size"]
      .concat(" - ")
      .concat(paintingData[i]["drawing type"]); 

    div.appendChild(other); 

    const price = document.createElement("p"); 

    price.textContent = "Price - ".concat(paintingData[i]["price"]);
    
    div.appendChild(price); 

    const status = document.createElement('p');

    status.textContent = paintingData[i]['status'];

    status.className = 'painting-status';

    div.appendChild(status);
  }
}
