const $input = document.querySelector(".input-search");
const $open = $input.querySelector(".-open");
const $close = $input.querySelector(".-close");

$open.addEventListener("click", event => {
  event.preventDefault();
  $input.classList.add("-active");
  $open.classList.remove("-active");
  $close.classList.add("-active");
});

$close.addEventListener("click", event => {
  event.preventDefault();
  $input.classList.remove("-active");
  $open.classList.add("-active");
  $close.classList.remove("-active");
});
