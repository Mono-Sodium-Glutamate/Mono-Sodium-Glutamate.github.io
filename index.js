window.addEventListener("scroll", function() {
  var navbar = document.querySelector(".top-bar");

if (window.scrollY > 50) {
  navbar.classList.remove("hidden");
} else {
  navbar.classList.add("hidden");
}
});

// Number of stars to generate
const numStars = 5;

// Get the container element for the stars
const nightContainer = document.querySelector('.night');

// Generate random positions and delays for each star
for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  // Randomize the position
  const left = (Math.random() - Math.random()) * 200; // Random left position in percentage
  const top = (Math.random() - Math.random()) * 200; // Random top position in percentage
  star.style.left = `${left}%`;
  star.style.top = `${top}%`;

  // Randomize the animation delay
  const delay = Math.random() * 7; // Random delay in seconds
  star.style.animationDelay = `${delay}s`;

  nightContainer.appendChild(star);
}

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
