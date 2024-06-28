let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
  updateFontSize();
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch(error) {
    display.value = 'Error';
  }
  updateFontSize();
}

function updateFontSize() {
  const displayInput = display.querySelector('input');
  const displayWidth = displayInput.scrollWidth;
  const displayContainerWidth = display.offsetWidth;
  
  if (displayWidth > displayContainerWidth) {
    const ratio = displayContainerWidth / displayWidth;
    const fontSize = parseFloat(window.getComputedStyle(displayInput).fontSize);
    displayInput.style.fontSize = (fontSize * ratio) + 'px';
  } else {
    displayInput.style.fontSize = 'inherit';
  }
}
