window.addEventListener("DOMContentLoaded", (event) => {
  const button = document.querySelector(".header__button");
  const hiddenElement = document.querySelector(".portfolio");

  let scrollIntoViewOptions = {
    behavior: "smooth",
  }

  function handleButtonClick() {
    hiddenElement.scrollIntoView(scrollIntoViewOptions);
  }

  button.addEventListener("click", handleButtonClick);
});
