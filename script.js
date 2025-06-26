console.log("Running script.js on ABOUT PAGE")
let keySequence = '';
  const secretCode = '1337';
  const modal = document.getElementById('easterEggModal');
  const closeButton = document.querySelector('.close');

  document.addEventListener('keydown', function(event) {
    keySequence += event.key;

    keySequence = keySequence.slice(-secretCode.length);

    if (keySequence === secretCode) {
      modal.style.display = 'block';
      keySequence = '';
    }
});

  closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const originalImg = "profile%20pic.jpg"; 
  const egg = document.getElementById("easterEgg");

  if (egg) {
    egg.addEventListener("click", () => {
      const isOriginal = egg.src.includes(originalImg);
      egg.src = isOriginal
        ? "./images/My alter-ego.jpg"
        : "./images/profile pic.jpg";
    });
  }
});