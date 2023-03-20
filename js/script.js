/*
` <div class="square">1</div>`
easy = 100
medium = 81
difficult = 49

square:
width: calc(100% / 10);
height: calc(100% / 10);
*/

const levelForm = document.getElementById('levelForm');
levelForm.addEventListener('submit', play);

//funzione per disegnare la cella
function drawSquare(content, sideNumSquares) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100% / ${sideNumSquares})`;
    square.style.height = square.style.width;
    square.innerHTML = content;
    return square;
};

// evento levelForm
function play(e) { 
    e.preventDefault();
    const playground = document.getElementById('playground');
    playground.innerHTML = '';

    //prendo il livello
    const level = document.getElementById('level').value;
    console.log(level);

    // imposto il numero di celle a seconda del livello 
    let squareNumbers;
    switch (level) {
        case 'easy':
            squareNumbers = 100;
            break;
        case 'medium':
            squareNumbers = 81;
            break;
        case 'difficult':
            squareNumbers = 49;
            break;
    };
    console.log(squareNumbers);

    //determino il numero di celle per lato 
    let squareXRow = Math.sqrt(squareNumbers);
    console.log(squareXRow);

    for (let i = 1; i <= squareNumbers; i++) {
        const square = drawSquare(i, squareXRow);
        square.addEventListener('click', function () {
            square.classList.add('safe');
        });
        playground.appendChild(square);
    };
};