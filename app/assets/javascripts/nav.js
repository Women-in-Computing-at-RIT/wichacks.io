document.addEventListener("DOMContentLoaded", (function() {
  var onScroll = function() {
    if (window.pageYOffset >= offsetTrigger) {
      if (usingDark) {
        return;
      }
      nav.classList.add('nav--dark');
      usingDark = true;
    } else {
      if (!usingDark) {
        return;
      }
      nav.classList.remove('nav--dark');
      usingDark = false;
    }
  };

  var usingDark = false;
  var nav = document.getElementById('nav');
  var about = document.getElementById('about');
  var offsetTrigger = about && about.offsetTop - 100;

  if (about && nav) {
    window.addEventListener('scroll', onScroll, false);
    onScroll();
  }
}));
