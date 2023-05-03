const gameContainer = document.getElementById('gameContainer');
let currentPlayer = "X";
let mapTable = [];
let y = 0;
const infoDiv = document.getElementById('info');
const infoWinner = document.getElementById('winner');
const continueBtn = document.getElementById('continueBtn');
const exitBtn = document.getElementById('exitBtn');
let drawVariable = [];

//displaying message about the win | pokazywanie wiadomości o wygranej

const showMessage = () => {
    infoDiv.style.display = 'block';
    infoWinner.innerHTML = `<p id="tekstinfo">Wygrał ${currentPlayer}</p>`;
}

//generating board based on table from setMap function | generowanie mapy na podstawie tablicy z funckji setMap

const randomMap = () => {
    for(let i = 0; i<41; i++){
        var cell = document.createElement('div');
        cell.classList.add('cell');
        
        cell.setAttribute('onclick', 'updateCell(event)')

        if(mapTable[y] == 1){
            cell.classList.add('green');
        }
        else{
            cell.classList.add('red');
        }

        cell.classList.add('firstInRow');
        gameContainer.appendChild(cell);

        for(let j = 0; j<40; j++){
            var cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('onclick', 'updateCell(event)')

            if(mapTable[y] == 1){
                cell.classList.add('green');
            }
            else{
                cell.classList.add('red');
            }

            gameContainer.appendChild(cell);

            y++;
        }
    }
}

//setting table of random numbers | wypełnianie tablicy losowymi cyframi 

const setMap = () => {
    for(let x = 0; x < 1600; x++){
        mapTable.push(parseInt(Math.random()*6));

        if(x == 1599){
            randomMap();
        }
    }
}

setMap()

//checking winner (call fucntion addPoints and showMessage) | sprawdzanie wygranej (wywołanie funckji addPoints i showMessage)

const checkWin = () => {
    for(let y=0; y < mapTable.length; y++){
        if(gameContainer.children[y].innerHTML == currentPlayer){
            if(gameContainer.children[y+1].innerHTML == currentPlayer && 
               gameContainer.children[y+2].innerHTML == currentPlayer && 
               gameContainer.children[y+3].innerHTML == currentPlayer && 
               gameContainer.children[y+4].innerHTML == currentPlayer && 
               gameContainer.children[y+5].innerHTML == currentPlayer){
                for (let b=0; b < gameContainer.children.length ; b++){
                    gameContainer.children[b].removeAttribute('onclick');
                }
                showMessage();
                addPoints();
            }

            if(gameContainer.children[y+41].innerHTML == currentPlayer && 
                gameContainer.children[y+82].innerHTML == currentPlayer && 
                gameContainer.children[y+123].innerHTML == currentPlayer && 
                gameContainer.children[y+164].innerHTML == currentPlayer && 
                gameContainer.children[y+205].innerHTML == currentPlayer){
                    for (let b=0; b < gameContainer.children.length ; b++){
                        gameContainer.children[b].removeAttribute('onclick');
                    }
                    showMessage();
                    addPoints();
            }

            if(gameContainer.children[y+42].innerHTML == currentPlayer && 
                gameContainer.children[y+84].innerHTML == currentPlayer && 
                gameContainer.children[y+126].innerHTML == currentPlayer && 
                gameContainer.children[y+168].innerHTML == currentPlayer && 
                gameContainer.children[y+210].innerHTML == currentPlayer){
                    for (let b=0; b < gameContainer.children.length ; b++){
                        gameContainer.children[b].removeAttribute('onclick');
                    }
                    showMessage();
                    addPoints();
            }
            
            if(gameContainer.children[y+40].innerHTML == currentPlayer && 
                gameContainer.children[y+80].innerHTML == currentPlayer && 
                gameContainer.children[y+120].innerHTML == currentPlayer && 
                gameContainer.children[y+160].innerHTML == currentPlayer && 
                gameContainer.children[y+200].innerHTML == currentPlayer){
                    for (let b=0; b < gameContainer.children.length ; b++){
                        gameContainer.children[b].removeAttribute('onclick');
                    }
                    showMessage();
                    addPoints();
            }
        }
    }
}

//switching player after move | przełączanie gracza po każdym ruchu

const switchPlayer = () => {
    if(currentPlayer == "X"){
        currentPlayer = "O"
        document.querySelector('#points2').style.color = 'red';
        document.querySelector('#points1').style.color = 'black';
    }
    else if(currentPlayer == "O"){
        currentPlayer = "△"
        document.querySelector('#points3').style.color = 'red';
        document.querySelector('#points2').style.color = 'black';
    }
    else if(currentPlayer == "△"){
        currentPlayer = "□"
        document.querySelector('#points4').style.color = 'red';
        document.querySelector('#points3').style.color = 'black';
    }
    else if(currentPlayer = "□"){
        currentPlayer = "X";
        document.querySelector('#points1').style.color = 'red';
        document.querySelector('#points4').style.color = 'black';
    }

}

//drawing signs and calling functions for check win or draw and switch player | wstawianie znaku w pole oraz wywołanie funckji sprawdzających wygraną lub remis i przełączającej gracza

const updateCell = (event) => {
    if(currentPlayer == "X" && event.target.innerHTML == "" && event.target.classList[1] != 'green'){
        event.target.innerHTML = "X";
        checkWin();
        checkDraw();
        switchPlayer();
    }
    else if(currentPlayer == "O" && event.target.innerHTML == "" && event.target.classList[1] != 'green'){
        event.target.innerHTML = "O"; 
        checkWin();  
        checkDraw(); 
        switchPlayer();
    }
    else if(currentPlayer == "△" && event.target.innerHTML == "" && event.target.classList[1] != 'green'){
        event.target.innerHTML = "△";   
        checkWin();  
        checkDraw();
        switchPlayer();
    }
    else if(currentPlayer == "□" && event.target.innerHTML == "" && event.target.classList[1] != 'green'){
        event.target.innerHTML = "□";  
        checkWin();   
        checkDraw();
        switchPlayer();
    }
}  

//adding points | dodawanie punktów

const addPoints = () => {
    document.getElementById(`pkt${currentPlayer}`).innerHTML = parseInt(document.getElementById(`pkt${currentPlayer}`).innerHTML) + 1;
}

let komorki = document.querySelectorAll('.red');

//function for reset game | funckja do resetu gry

const gameReset = () =>{
    for (let i=0; i<komorki.length ; i++){
        komorki[i].innerHTML = "";
        komorki[i].setAttribute('onclick', 'updateCell(event)');
    }
    currentPlayer = "X";
    document.querySelector('#points1').style.color = 'red';
    document.querySelector('#points2').style.color = 'black';
    document.querySelector('#points3').style.color = 'black';
    document.querySelector('#points4').style.color = 'black';
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
        for (var i=0; i < komorki.length ; i++){
            komorki[i].removeAttribute('onclick');
        }

        infoDiv.style.display = 'block';
        infoWinner.innerHTML = `Remis`;  
    }
}