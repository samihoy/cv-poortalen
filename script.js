//---------------------------------------------------------------------
// Profile picture Easter egg
//---------------------------------------------------------------------

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

//----------------------------------------------------------------------
//        Nya Easter egg ett, som ändrar backgrunden
//----------------------------------------------------------------------

const musicEasterEgg = document.getElementById('Background-easteregg');
let isOriginalBackground = true;

if (musicEasterEgg){
  musicEasterEgg.addEventListener('click', () => {
    if (isOriginalBackground) {
      document.body.style.backgroundColor = 'hotpink';  //Aldors favorit här, kommer ihåg från frontend kursen ^^
    } else {
      document.body.style.backgroundColor = '';
    }
    isOriginalBackground = !isOriginalBackground;
  });
}

//----------------------------------------------------------------------
// Här är nya event listern, den är global för det var så den skulle vara eller hur?
//jag tog inte bort det gammla påskäget, uttan la bara till ett nytt
//----------------------------------------------------------------------

let secretTypedKeys = '';
const unlockCode = '1337';
const popupElement = document.querySelector('.hidden-modal');
const closeButtonElement = document.querySelector('.close-popup-button');

document.addEventListener('keydown', function(event) {
  secretTypedKeys += event.key;
  secretTypedKeys = secretTypedKeys.slice(-unlockCode.length);

  if (secretTypedKeys === unlockCode) {
    popupElement.style.display = 'block';
    secretTypedKeys = ''; 
  }
});

closeButtonElement.addEventListener('click', function() {
  popupElement.style.display = 'none';
});