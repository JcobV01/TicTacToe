let komorki = document.querySelectorAll('.cells');
let currentPlayer = "X";
const winNumbers = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
const infoDiv = document.getElementById('info');
const infoWinner = document.getElementById('winner');
const continueBtn = document.getElementById('continueBtn');
const exitBtn = document.getElementById('exitBtn');

let drawVariable = [];
let pktX = document.getElementById('pktX');
let pktO = document.getElementById('pktO');

//setting onclick function on every div | ustawienie funckji po kliknięciu dla każdego diva

for (let i=0; i<komorki.length ; i++){
    komorki[i].setAttribute('onclick', 'updateCell(event)');
}

//displaying message about the win | pokazywanie wiadomości o wygranej

const showMessage = () => {
    infoDiv.style.display = 'block';
    infoWinner.innerHTML = `<p id="tekstinfo">Wygrał ${currentPlayer}</p>`;
}

//adding points | dodawanie punktów

const addPoints = () => {
    document.getElementById(`pkt${currentPlayer}`).innerHTML = parseInt(document.getElementById(`pkt${currentPlayer}`).innerHTML) + 1
}

//checking winner (call fucntion addPoints and showMessage) | sprawdzanie wygranej (wywołanie funckji addPoints i showMessage)

const checkWin = () => {
    for(let x = 0; x < winNumbers.length; x++){
        const [a, b, c] = winNumbers[x];
        
        if(komorki[a].innerHTML == currentPlayer && komorki[b].innerHTML == currentPlayer && komorki[c].innerHTML == currentPlayer){
            for (let i=0; i < komorki.length ; i++){
                komorki[i].removeAttribute('onclick');
            }
            showMessage();
            addPoints();
        }
    }
}

//switching player after move | przełączanie gracza po każdym ruchu

const switchPlayer = () => {
    currentPlayer = currentPlayer == "X" ? "O" : "X";
}

//drawing signs and calling functions for check win or draw and switch player | wstawianie znaku w pole oraz wywołanie funckji sprawdzających wygraną lub remis i przełączającej gracza

const updateCell = (event) => {
    if(currentPlayer == "X" && event.target.innerHTML == ""){
        event.target.innerHTML = "X";
        checkWin();
        checkDraw();
        switchPlayer();
    }
    else if(currentPlayer == "O" && event.target.innerHTML == ""){
        event.target.innerHTML = "O";
        checkWin();
        checkDraw();
        switchPlayer();
    }  
}

//function for reset game | funckja do resetu gry

const gameReset = () => {
    for (var i=0; i<komorki.length ; i++){
        komorki[i].innerHTML = "";
        komorki[i].setAttribute('onclick', 'updateCell(event)');
    }
    currentPlayer = "X";
}

//operation of buttons | obsługa guzików


exitBtn.addEventListener('click', ()=>{
    location.href = "../index.html"
})

continueBtn.addEventListener('click', ()=>{
    infoDiv.style.display = 'none';

    gameReset();
})

//checking draw | sprawdzanie remisu

const checkDraw = () => {
    for(let g = 0; g < komorki.length; g++){
        drawVariable[g] = komorki[g].innerHTML;
    }

    if(drawVariable.includes("") == false){
        for (let i=0; i < komorki.length ; i++){
            komorki[i].removeAttribute('onclick');
        }

        infoDiv.style.display = 'block';
        infoWinner.innerHTML = `Remis`;  
    }
}



