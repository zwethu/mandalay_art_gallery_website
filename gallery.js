//ImageData is in this order - image url, artist name, picture name, width, height, size, drawing type, price  
const imageData = [
    ["background.jpg","Artist Name","caption", "11", "11", "medium", "acrylic","300,000,000"],
    ["background.jpg","Artist Name","caption", "11", "11", "medium", "acrylic","300,000,000"],
    ["background.jpg","Artist Name","caption", "11", "11", "medium", "acrylic","300,000,000"],
    ["background.jpg","Artist Name","caption", "11", "11", "medium", "acrylic","300,000,000"],
    ["background.jpg","Artist Name","caption", "11", "11", "medium", "acrylic","300,000,000"],
    ["background.jpg","Artist Name","caption", "11", "11", "medium", "acrylic","300,000,000"],
    ["background.jpg","Artist Name","caption", "11", "11", "medium", "acrylic","300,000,000"],
    ["background.jpg","Artist Name","caption", "11", "11", "medium", "acrylic","300,000,000"],
    ["background.jpg","Artist Name","caption", "11", "11", "medium", "acrylic","300,000,000"],
    ["background.jpg","Artist Name","caption", "11", "11", "medium", "acrylic","300,000,000"],
    ["background.jpg","Artist Name","caption", "11", "11", "medium", "acrylic","300,000,000"],
    ["background.jpg","Artist Name","caption", "11", "11", "medium", "acrylic","300,000,000"],
    ["background.jpg","Artist Name","caption", "11", "11", "medium", "acrylic","300,000,000"],
  ];
  
  const section = document.getElementById("gallery"); // get element from gallery section
  
  const title = document.createElement("h1"); // create h1 for header
  
  title.textContent = "Gallery"; // give h1 value of "Gallery"
  
  title.classList.add("gallery-title"); //give the class name "gallery-title to that h1 element"
  
  section.append(title); // add created element title(header) into the section element
  
  const galleryDiv = document.createElement("div");//create container for all img div
  
  galleryDiv.classList.add("gallery-div");//class name for galleryDiv
  
  section.append(galleryDiv);// add div to the section
  
  //loop for the every data in the imageData array
  for (let i = 0; i < imageData.length; i++) {
    
    let link = document.createElement("a");// create a tag to be clickable

    link.setAttribute("target","_blank");// target blank for new tab

    link.href = "assets/images/".concat(imageData[i][0]);//first index of two dimensional array is the url of image

    link.classList.add("gallery-img-link");// give the class name "gallery-img-link"

    galleryDiv.appendChild(link);//cover div with a tag so it will be clickable

    let div = document.createElement("div"); //create container for the image and other data
  
    div.classList.add("gallery-img-div"); //give the class name "gallery-img-div" to the div
  
    link.appendChild(div);// add div 
  
    let img = document.createElement("img");// create img element
  
    img.src = "assets/images/".concat(imageData[i][0]);// first index of two dimensional array is the url of image
  
    img.classList.add("gallery-img");// give class name to the image
  
    div.appendChild(img);// add img to the div
  
    let artist = document.createElement("p");// create p element for artist
  
    artist.textContent = "Artist - ".concat(imageData[i][1]);//index 1 is the artist name
  
    div.appendChild(artist);
  
    let caption = document.createElement("p");//create p for image title
  
    caption.textContent = "Title - ".concat(imageData[i][2]);// index 2 is the image title
  
    div.appendChild(caption);//add caption to the div
  
    let measurement = document.createElement("p");//create p for witdh and height data
  
    measurement.textContent = "Size - ".concat(imageData[i][3]).concat('" ').concat(imageData[i][4]).concat('"');// index 3 is width and index 4 is the height of the image
  
    div.appendChild(measurement);//add measurement to div
  
    let other = document.createElement("p");//create p for other data; size and drawing type
  
    other.textContent = imageData[i][5].concat(" - ").concat(imageData[i][6]);// index 5 is size and 6 is the drawing type of the image
  
    div.appendChild(other);//add that element to the div
  
    let price = document.createElement("p");//create p for price
  
    price.textContent = "Price - ".concat(imageData[i][7]);//index 7 is the price of the picture
  
    div.appendChild(price);// add price to the img
  }
  