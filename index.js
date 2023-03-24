window.addEventListener("scroll", function() {
  var navbar = document.querySelector(".top-bar");

if (window.scrollY > 50) {
  navbar.classList.remove("hidden");
} else {
  navbar.classList.add("hidden");
}
});

const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

function onTabClick() {
  const tab = this.dataset.tab;
  tabContents.forEach(content => {
    if (content.dataset.tab === tab) {
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
  });
  tabs.forEach(tab => tab.classList.remove('active'));
  this.classList.add('active');
}

tabs.forEach(tab => tab.addEventListener('click', onTabClick));
