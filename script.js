document.addEventListener('DOMContentLoaded', function () {
  const greenRange = document.getElementById('greenRange');
  const greenBox = document.getElementById('greenBox');
  const greenHex = document.getElementById('greenHex');

  const redRange = document.getElementById('redRange');
  const redBox = document.getElementById('redBox');
  const redHex = document.getElementById('redHex');

  function updateGreenBox() {
      const greenValue = parseInt(greenRange.value);
      const rgb = `rgb(0, ${greenValue}, 0)`; // Usar template literals
      const hex = `#00${greenValue.toString(16).padStart(2, '0').toUpperCase()}00`; // Formato correcto para HEX
      greenBox.style.backgroundColor = rgb;
      greenHex.textContent = hex;
  }

  function updateRedBox() {
      const redValue = parseInt(redRange.value);
      const rgb = `rgb(${redValue}, 0, 0)`; // Usar template literals
      const hex = `#${redValue.toString(16).padStart(2, '0').toUpperCase()}0000`; // Formato correcto para HEX
      redBox.style.backgroundColor = rgb;
      redHex.textContent = hex;
  }

  greenRange.addEventListener('input', updateGreenBox);
  redRange.addEventListener('input', updateRedBox);

  // Inicializar los valores al cargar la página
  updateGreenBox();
  updateRedBox();
});

