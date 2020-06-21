let squareCreator = function () {
    const square = document.createElement('div');
    square.classList.add("box")
    return square;
}

let rowCreator = function () {
    const row = document.createElement('div');
    row.classList.add("row");
    return row;
}

let gridConstructor = function (squaresPerSide) {
    const grid = document.querySelector(".grid");
    
    //Create squaresPerSide number of rows
    for (let i = 0; i < squaresPerSide; i++) {
        const row = rowCreator()
        
        //Create squaresPerSide number of squares
        for (let i = 0; i < squaresPerSide; i ++) {
            const square = squareCreator();
            row.appendChild(square);
        };

        grid.appendChild(row);
    };
};

let createTrail = function () {
    const squares = document.querySelectorAll(".box");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
        square.style.background = "grey";
        });
    });
    return squares;
};

let createGrid = function () {
    let userGridNumber = window.prompt("Enter squares per side: ");
    gridConstructor(userGridNumber);

    createTrail();
};

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    const grid = document.querySelector(".grid");
    grid.innerHTML = '';
    createGrid();
});


createGrid();