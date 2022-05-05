const buttons = document.querySelectorAll('.nav__button')
const grid = document.querySelector('.container__grid')

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {

    if (!button.classList.contains("active")) {
      buttons.forEach((button) => button.classList.remove("active"));
      button.classList.add("active");
    }

    grid.style.gap = e.target.dataset.gap
  })
})


