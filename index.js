window.addEventListener("scroll", function() {
  var navbar = document.querySelector(".top-bar");

if (window.scrollY > 50) {
  navbar.classList.remove("hidden");
} else {
  navbar.classList.add("hidden");
}
});