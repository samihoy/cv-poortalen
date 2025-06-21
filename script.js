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