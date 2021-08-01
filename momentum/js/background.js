const picture = ["picture01.jpg", "picture02.jpg", "picture03.jpg", "picture00.jpg"];
const chosenImage = picture[Math.floor(Math.random() * picture.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);