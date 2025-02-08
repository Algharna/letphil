/*
1. Create array containing all cards
    Card =  src: imgfile, matched: false,

2. Flip logic
    turn count
      every 2 cards clicked
        +1 turn counter
    if card is clicked:
      flip over
      check if there is 2nd card over
      if there are 2 cards sharing imgsrc, set match key to true
        if key is matched, key those cards turned over
      if key is not matched
        reflip card over
3. win condition
    if all keys all keys matching - true
      pop modal saying you won
        new game button
          reshuffle card
          rerender card
*/
const cardArray = [
  { src: "assets/elf1.jpg", matched: false },
  { src: "assets/elf2.jpg", matched: false },
  { src: "assets/elf3.jpg", matched: false },
  { src: "assets/elf4.jpg", matched: false },
  { src: "assets/elf5.jpg", matched: false },
  { src: "assets/elf6.jpg", matched: false },
];

const cardImages = [...cardArray, ...cardArray];

// console.log("cardImages = ", cardImages);
//DOM Elements
const cards = document.querySelectorAll(".card");
const cardFaces = document.querySelectorAll(".face");

//renderedCard function
function renderCard() {
  //update each card face with corresponding image from card array
  cardFaces.forEach((cardFace, index) => {
    const img = document.createElement("img");
    img.src = cardImages[index].src;
    cardFace.appendChild(img);
  });

  //add event listener for clicking
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      card.classList.add("transformed");
    });
  });
}

//console.log(cardImages.length); length counts the number of onjects in the array, so this is 12. from line 32
//shuffleCards function
function shuffleCards() {
  for (let i = cardImages.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardImages[i], cardImages[j]] = [cardImages[j], cardImages[i]];
    console.log(`${i} iteration`, cardImages);
  }
  return cardImages;
}

//initialize game
function init() {
  newGameBin.addEventListener("click", shuffleCard);
  shuffleCards();
}

function newGame() {
  shuffleCards();
  renderCard();
}
init();
// const shuffledCards = [...cards, ...cards];
