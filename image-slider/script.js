const imagesArray = [
  { src: "./images/elf1.jpg" },
  { src: "./images/elf2.jpg" },
  { src: "./images/elf3.jpg" },
  { src: "./images/elf4.jpg" },
  { src: "./images/elf5.jpg" },
  { src: "./images/elf6.jpg" },
];
let imagesCount = 0;
const images = [...imagesArray];
const imageHolder = document.getElementById("imageHolder");
window.onload = function () {
  const imageArea = document.createElement("span");
  imageArea.id = "imageArea";
  const image = document.createElement("img");
  image.src = "./images/elf1.jpg";
  imageHolder.appendChild(imageArea);
  imageArea.appendChild(image);
};
function displayImages() {
  imageHolder.innerHTML = "";
  let index = imagesCount % images.length;
  const imageArea = document.createElement("span");
  imageArea.id = "imageArea";
  const image = document.createElement("img");
  image.src = images[index].src;
  imageHolder.appendChild(imageArea);
  imageArea.appendChild(image);
  imagesCount++;
}

function generateImage() {
  imageHolder.innerHTML = "";
  let index = imagesCount % images.length;
  const imageArea = document.createElement("span");
  imageArea.id = "imageArea";
  const image = document.createElement("img");
  image.src = images[index].src;
  imageHolder.appendChild(imageArea);
  imageArea.appendChild(image);
}

function cycleImagesRight() {
  imagesCount = (imagesCount + 1) % images.length;
  generateImage();
}

function cycleImagesLeft() {
  imagesCount = (imagesCount - 1 + images.length) % images.length;
  generateImage();
}

function cycleThroughImages() {
  setInterval(displayImages, 1000);
}
