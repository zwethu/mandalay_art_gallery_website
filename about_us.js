const bioData = [
    [
      ["Date of birth", "23rd May 1956 in Myeik"],
      ["Parents", "U Tun Kyaing ( Author Shwe Myeik Maung and Daw Saw Thi.)"],
      [
        "Studied Under",
        "Studied at yangon Fine Art School From 1973 - 1976 Saya Gyi U Thein, Saya U Thu Kha, Saya U Lun Gywe, Saya U Myat Kyaw, U Ba Lone Lay and Saya U Mya Aye.",
      ],
      [
        "1973",
        "While teaching first year of painting, he entered comic book world with Moke Soe Gyi Comic ( Bo Tar Yar Ye’ Baw Thone Kyatt)",
      ],
      [
        "Exhibition",
        "Also drew comic paintings based on ancient Bagan stories and modern stories studies batik Painting from artist Saya Wa Thone and held batik painting shows and group painting shows with fellow artists.",
      ],
      [
        "2006",
        "50th Goldern Anniversary painting show with Artist Nang (his wife)",
      ],
      ["2007", "Painting show with Artist Nangt"],
      [
        "2010",
        "A special Solo Show based on ancident Bagan historical battles of heroes on elephants and horses.",
      ],
    ],
  ];
  
  const exhibitionImageData = [
    [
      [
        "background.jpg",
        "Artist Name",
        "caption",
        "11",
        "11",
        "medium",
        "acrylic",
        "300,000,000",
      ],
      [
        "background.jpg",
        "Artist Name",
        "caption",
        "11",
        "11",
        "medium",
        "acrylic",
        "300,000,000",
      ],
      [
        "background.jpg",
        "Artist Name",
        "caption",
        "11",
        "11",
        "medium",
        "acrylic",
        "300,000,000",
      ],
      [
        "background.jpg",
        "Artist Name",
        "caption",
        "11",
        "11",
        "medium",
        "acrylic",
        "300,000,000",
      ],
      [
        "background.jpg",
        "Artist Name",
        "caption",
        "11",
        "11",
        "medium",
        "acrylic",
        "300,000,000",
      ],
      [
        "background.jpg",
        "Artist Name",
        "caption",
        "11",
        "11",
        "medium",
        "acrylic",
        "300,000,000",
      ],
      [
        "background.jpg",
        "Artist Name",
        "caption",
        "11",
        "11",
        "medium",
        "acrylic",
        "300,000,000",
      ],
      [
        "background.jpg",
        "Artist Name",
        "caption",
        "11",
        "11",
        "medium",
        "acrylic",
        "300,000,000",
      ],
      [
        "background.jpg",
        "Artist Name",
        "caption",
        "11",
        "11",
        "medium",
        "acrylic",
        "300,000,000",
      ],
    ],
  ];

  const artistsImg = [
    "assets/images/bishamonten.jpg",
  ];
  const artists = ["Artist Nang (Tiger Nang)"];
  
  for (let i = 0; i < artists.length; i++) {

    const section = document.getElementById("about-us");
    const artist = document.createElement("section");
  
    artist.classList.add("artist-sec");
  
    section.appendChild(artist);
  
    const artistImgDiv = document.createElement("div");
  
    artistImgDiv.className = "artist-img-div";
  
    artist.appendChild(artistImgDiv);
  
    const artistImg = document.createElement("img");
  
    artistImg.className = "artist-img";
  
    artistImg.src = artistsImg[i];
  
    artistImgDiv.appendChild(artistImg);
  
    const bioDiv = document.createElement("div");
  
    bioDiv.className = "bio-div";
  
    artist.appendChild(bioDiv);
  
    for (let j = 0; j < bioData[i].length; j++) {
      const title = document.createElement("h5");
      title.classList.add("bio-title");
      title.textContent = bioData[i][j][0];
      bioDiv.appendChild(title);
      const bioContent = document.createElement("p");
      bioContent.textContent = bioData[i][j][1];
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
  for (let j = 0; j < exhibitionImageData[i][i].length; j++) {
    let link = document.createElement("a"); // create a tag to be clickable
  
    link.setAttribute("target", "_blank"); // target blank for new tab
  
    link.href = "assets/images/".concat(exhibitionImageData[i][j][0]); //first index of two dimensional array is the url of image
  
    link.classList.add("gallery-img-link"); // give the class name "gallery-img-link"
  
    galleryDiv.appendChild(link); //cover div with a tag so it will be clickable
  
    let div = document.createElement("div"); //create container for the image and other data
  
    div.classList.add("gallery-img-div"); //give the class name "gallery-img-div" to the div
  
    link.appendChild(div); // add div
  
    let img = document.createElement("img"); // create img element
  
    img.src = "assets/images/".concat(exhibitionImageData[i][j][0]); // first index of two dimensional array is the url of image
  
    img.classList.add("gallery-img"); // give class name to the image
  
    div.appendChild(img); // add img to the div
  
    let artist = document.createElement("p"); // create p element for artist
  
    artist.textContent = "Artist - ".concat(exhibitionImageData[i][j][1]); //index 1 is the artist name
  
    div.appendChild(artist);
  
    let caption = document.createElement("p"); //create p for image title
  
    caption.textContent = "Title - ".concat(exhibitionImageData[i][j][2]); // index 2 is the image title
  
    div.appendChild(caption); //add caption to the div
  
    let measurement = document.createElement("p"); //create p for witdh and height data
  
    measurement.textContent = "Size - "
      .concat(exhibitionImageData[i][j][3])
      .concat('" ')
      .concat(exhibitionImageData[i][j][4])
      .concat('"'); // index 3 is width and index 4 is the height of the image
  
    div.appendChild(measurement); //add measurement to div
  
    let other = document.createElement("p"); //create p for other data; size and drawing type
  
    other.textContent = exhibitionImageData[i][j][5].concat(" - ").concat(exhibitionImageData[i][j][6]); // index 5 is size and 6 is the drawing type of the image
  
    div.appendChild(other); //add that element to the div
  
    let price = document.createElement("p"); //create p for price
  
    price.textContent = "Price - ".concat(exhibitionImageData[i][j][7]); //index 7 is the price of the picture
  
    div.appendChild(price); // add price to the img
  }
}