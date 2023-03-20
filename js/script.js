/*
Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del 
gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma 
solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di 
stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della 
difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere 
posizionata al massimo una bomba, perciò nell’array delle bombe non potranno 
esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista 
dei numeri generati - abbiamo calpestato una bomba - la cella si colora di 
rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro 
e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge 
il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato 
    tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il 
numero di volte che l’utente ha cliccato su una cella che non era una bomba.

BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una 
scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 
10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 
9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 
7 caselle per 7 righe;

Superbonus 1
Quando si clicca su una bomba e finisce la partita, evitare che si possa 
cliccare su altre celle.

Superbonus 2
Quando si clicca su una bomba e finisce la partita, il software scopre tutte 
le bombe nascoste.
*/

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
            this.classList.add('safe');
        });
        playground.appendChild(square);
    };
};