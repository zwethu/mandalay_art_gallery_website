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
    createCurrentExhibition(0);
    createPreviousExhibitions(0);
  })
  .catch((error) => console.error(error));

function createCurrentExhibition(exhibitionId) {
  const section = document.getElementById("exhibitions");

  const currentExhibition = document.createElement("div");

  currentExhibition.id = "current-exhibition";

  section.appendChild(currentExhibition);

  const currentExhibitionTitle = document.createElement("h1");

  currentExhibitionTitle.className = "exhibition-title";

  currentExhibitionTitle.textContent = "Current Art Exhibition";

  currentExhibition.appendChild(currentExhibitionTitle);

  const link = document.createElement("a");

  link.href = `art_exhibition.html?exhibition=${exhibitionId}`;

  link.className = "exhibition-link";

  currentExhibition.appendChild(link);

  const currentExhibitionDiv = document.createElement("div");

  currentExhibitionDiv.className = "exhibition-div";

  link.appendChild(currentExhibitionDiv);

  const exhibitionImg = document.createElement("img");

  exhibitionImg.src = exhibitionData[exhibitionId]["exhibition_img"];

  exhibitionImg.classList.add("exhibition-img");

  const exhibitionImgTextDiv = document.createElement("div");

  exhibitionImgTextDiv.className = "exhibition-img-text-div";

  currentExhibitionDiv.appendChild(exhibitionImgTextDiv);

  currentExhibitionDiv.appendChild(exhibitionImg);

  const exhibitionName = document.createElement("p");

  exhibitionName.className = "exhibitionName";

  exhibitionName.textContent = exhibitionData[exhibitionId]["title"].replaceAll(
    "&#44",
    ","
  );

  exhibitionImgTextDiv.appendChild(exhibitionName);

  const place = document.createElement("p");

  place.className = "exhibition-place";

  place.textContent = exhibitionData[exhibitionId]["place"];

  exhibitionImgTextDiv.appendChild(place);

  const date = document.createElement("p");

  date.className = "exhibition-date";

  date.textContent = exhibitionData[exhibitionId]["date"];

  exhibitionImgTextDiv.appendChild(date);
}

function createPreviousExhibitions(exhibitionId) {
  const section = document.getElementById("exhibitions");

  const currentExhibition = document.createElement("div");

  currentExhibition.id = "previous-exhibitions";

  section.appendChild(currentExhibition);

  const currentExhibitionTitle = document.createElement("h1");

  currentExhibitionTitle.className = "exhibition-title";

  currentExhibitionTitle.textContent = "Previous Art Exhibitions";

  currentExhibition.appendChild(currentExhibitionTitle);

  for (let i = 0; i < exhibitionData.length; i++) {
    if (i === exhibitionId) {
    } else {
      const link = document.createElement("a");

      link.href = `art_exhibition.html?exhibition=${i}`;

      link.className = "exhibition-link";

      currentExhibition.appendChild(link);

      const currentExhibitionDiv = document.createElement("div");

      currentExhibitionDiv.className = "exhibition-div";

      link.appendChild(currentExhibitionDiv);

      const exhibitionImg = document.createElement("img");

      exhibitionImg.src = exhibitionData[i]["exhibition_img"];

      exhibitionImg.classList.add("exhibition-img");

      currentExhibitionDiv.appendChild(exhibitionImg);

      const exhibitionImgTextDiv = document.createElement("div");

      exhibitionImgTextDiv.className = "exhibition-img-text-div";

      currentExhibitionDiv.appendChild(exhibitionImgTextDiv);

      const exhibitionName = document.createElement("p");

      exhibitionName.className = "exhibitionName";

      exhibitionName.textContent = exhibitionData[i]["title"].replaceAll(
        "&#44",
        ","
      );

      exhibitionImgTextDiv.appendChild(exhibitionName);

      const dateAndPlaceDiv = document.createElement('div');

      dateAndPlaceDiv.className = 'exhibition-img-date-place-div';

      exhibitionImgTextDiv.appendChild(dateAndPlaceDiv);

      const place = document.createElement("p");

      place.className = "exhibition-place";

      place.textContent = exhibitionData[i]["place"];

      dateAndPlaceDiv.appendChild(place);

      const date = document.createElement("p");

      date.className = "exhibition-date";

      date.textContent = exhibitionData[i]["date"];

      dateAndPlaceDiv.appendChild(date);
    }
  }
}
