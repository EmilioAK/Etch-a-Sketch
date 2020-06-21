const squares = document.querySelectorAll(".box")

squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.style.background = "grey";
    });
});