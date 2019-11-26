document.addEventListener("DOMContentLoaded", (function() {
  var usingDark = false;
  var nav = document.getElementById('nav');
  var about = document.getElementById('about');
  var onScroll = function() {
    if (window.pageYOffset >= about.offsetTop - 100) {
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

  if (about && nav) {
    window.addEventListener('scroll', onScroll, false);
    onScroll();
  }
}));
