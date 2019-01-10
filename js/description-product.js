const $heart = document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");
let lastItem = $stars.length - 1;

$heart.addEventListener("click", handleClick);

$stars.forEach(function($star, key) {
  if (key >= 0) {
    $star.addEventListener("click", function() {
      middleStar(key);
    });
  }
});

function handleClick() {
  this.classList.toggle("-active");
}

function middleStar(index) {
  $stars.forEach(function($star) {
    $star.classList.remove("-active");
  });

  $stars.forEach(function($star, key) {
    if (key <= index) {
      $star.classList.add("-active");
    }
  });
}

// function lastStar() {
//   $stars.forEach(function($star) {
//     $star.classList.add("-active");
//   });
// }
