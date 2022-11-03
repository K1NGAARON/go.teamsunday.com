let slider = document.getElementById("myRange");
let output = document.getElementById("output");
output.innerHTML = slider.value;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}


