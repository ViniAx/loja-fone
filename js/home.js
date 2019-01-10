let valorInicial = 10;
const $secondButton = document.querySelector(".-second");

$secondButton.addEventListener("click", handleClick);

function handleClick() {
  const $carrinho = document.querySelector(".-last");

  $carrinho.textContent = `Carrinho (${++valorInicial})`;
}
