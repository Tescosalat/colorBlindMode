const colorBlindModeEnabled = document.body.classList.contains('color-blind-mode');


if (colorBlindModeEnabled) {
  document.body.style.filter = 'contrast(130%)';  
} else {
  document.body.style.filter = ''; 
}
