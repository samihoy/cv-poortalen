const modal = document.getElementById('easterEggModal');
const closeButton = document.querySelector('.close');

if (modal && closeButton) {
  let keySequence = '';
  const secretCode = '1337';

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
}


console.log("TEST: Script is running on this page.");
//----------------------------------------------------------------------
//        Nya Easter egg ett, som ändrar backgrunden
//----------------------------------------------------------------------
const musicEasterEgg = document.getElementById('Background-easteregg');
let isOriginalBackground = true;

if (musicEasterEgg) {
  musicEasterEgg.addEventListener('click', () => {
    if (isOriginalBackground) {
      document.body.style.backgroundColor = 'hotpink';  //aldors favorit färg : )
    } else {
      document.body.style.backgroundColor = '';
    }
    isOriginalBackground = !isOriginalBackground;
  });
}
//----------------------------------------------------------------------
// Här är nya event listern, den är global för det var så den skule vara eller hur?
//jag tog inte bort det gammla påskäget, uttan la bara till ett nytt
//----------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  let typedKeys = '';
  const code = 'max';
  const popup = document.querySelector('.secret-popup-overlay');
  const closeButton = document.querySelector('.secret-popup-close');

  if (popup && closeButton) {
    document.addEventListener('keydown', (event) => {
      typedKeys += event.key;
      typedKeys = typedKeys.slice(-code.length);
      if (typedKeys === code) {
        popup.style.display = 'block';
        typedKeys = '';
      }
    });

    closeButton.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  }
});
