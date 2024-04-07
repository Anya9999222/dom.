document.addEventListener("DOMContentLoaded", () => {
  const board = document.querySelectorAll(".board-el");

  let previousCell = 1;

  function generateNumber() {
    let cell = Math.floor(Math.random() * (16 - 1) + 1);
    return cell;
  }
  function setGoblin() {
    let cell = generateNumber();
    if (cell === previousCell) {
      cell = generateNumber();
    } else {
      previousCell = cell;
    }

    board.forEach((el) => {
      el.classList.remove("active");
      if (el.dataset.id === cell.toString()) {
        el.classList.add("active");
      }
    });
  }

  const interval = setInterval(() => {
    setGoblin();
  }, 1000);
});
