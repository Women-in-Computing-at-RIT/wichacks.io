document.addEventListener("DOMContentLoaded", (function() {
  var boxes = document.getElementsByClassName('box--animates');
  var activeBoxes = [];
  var onClick = function() {
    activeBoxes.forEach(function(box) {
      box.classList.remove('active');
    });
    activeBoxes.push(this);
    this.classList.add('active');
  };
  Array.from(boxes).forEach(function(box) {
    box.addEventListener('touchstart', onClick, false);
  });
}));
