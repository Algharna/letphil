const imagesArray = [
  { src: "./images/elf1.jpg" },
  { src: "./images/elf2.jpg" },
  { src: "./images/elf3.jpg" },
  { src: "./images/elf4.jpg" },
  { src: "./images/elf5.jpg" },
  { src: "./images/elf6.jpg" },
];

const images = [...imagesArray];
window.onload = displayImages();
console.log(images.length);

function displayImages() {
  const displayedImagesArea = document.getElementById("displayedImagesArea");
  for (let i = 0; i < images.length; i++) {
    const imageArea = document.createElement("span");
    imageArea.id = "imageArea";
    const image = document.createElement("image");
    image.id = "image";
    image.src = images[i].src;

    displayedImagesArea.appendChild(image);
    imageArea.appendChild(image);
  }
}

// previousImage() {

// }

// nextImage() {

// }
