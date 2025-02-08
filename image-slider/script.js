const imagesArray = [
  { src: "./images/elf1.jpg" },
  { src: "./images/elf2.jpg" },
  { src: "./images/elf3.jpg" },
  { src: "./images/elf4.jpg" },
  { src: "./images/elf5.jpg" },
  { src: "./images/elf6.jpg" },
];

const images = [...imagesArray];
console.log(images.length);

function displayImages() {
  const imageHolder = document.getElementById("imageHolder");
  for (let i = 0; i < images.length; i++) {
    const imageArea = document.createElement("span");
    imageArea.id = "imageArea";
    const image = document.createElement("img");
    image.src = images[i].src;

    imageHolder.appendChild(imageArea);
    imageArea.appendChild(image);
  }
}

displayImages();

// previousImage() {

// }

// nextImage() {

// }
