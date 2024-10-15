const pickScissor = document.getElementById("selectScissor");
const pickPaper = document.getElementById("selectPaper");
const pickRock = document.getElementById("selectRock");

const npcScissor = document.getElementById("npcScissor");
const npcPaper = document.getElementById("npcPaper");
const npcRock = document.getElementById("npcRock");

const selectScissor = document.getElementById("playerScissor");
const selectPaper = document.getElementById("playerPaper");
const selectRock = document.getElementById("playerRock");

const playerScoreText = document.getElementById("playerScore");
const npcScoreText = document.getElementById("npcScore");
const comment = document.getElementById("Title");

const reset = document.getElementById("resetContainer");
const Reset = document.getElementById("Reset");
const select = document.getElementById("selectContainer");
const Reload = document.getElementById("mainContainer");

let npc = [npcScissor, npcPaper, npcRock];
let math = npc[Math.floor(Math.random() * npc.length)];

let playerScores = 0;
let npcScores = 0;

pickScissor.addEventListener("click", function(){
    let npc = [npcScissor, npcPaper, npcRock];
    let math = npc[Math.floor(Math.random() * npc.length)];
    selectScissor.style.display = "block";
    Reset.style.display = "block";
    if(selectScissor !== "block"){
        math.style.display = "block";
        pickScissor.style.pointerEvents = 'none';
        pickPaper.style.pointerEvents = 'none';
        pickRock.style.pointerEvents = 'none';
        if(selectScissor.style.display === "block" && npcScissor.style.display === "block"){
            comment.textContent = "Draw!";
            comment.style.backgroundColor = "#454340";

        }else if(selectScissor.style.display === "block" && npcPaper.style.display === "block"){
            comment.textContent = "You Won";
            comment.style.backgroundColor = "green";
            playerScores++;
            playerScoreText.textContent = `${playerScores}`;

        }else if(selectScissor.style.display === "block" && npcRock.style.display === "block"){
            comment.textContent = "You Lose";
            comment.style.backgroundColor = "red"
            npcScores++;
            npcScoreText.textContent = `${npcScores}`;             
        }if(playerScores === 5){
            comment.textContent = "Congratulation You Win";
            
        }else if(npcScores === 5){
            comment.textContent = "Better Luck next Game";
        }
    }
});

pickPaper.addEventListener("click", function(){
    let npc = [npcScissor, npcPaper, npcRock];
    let math = npc[Math.floor(Math.random() * npc.length)];
    selectPaper.style.display = "block";
    Reset.style.display = "block";
    if(selectScissor !== "block"){
        math.style.display = "block";
        pickScissor.style.pointerEvents = 'none';
        pickPaper.style.pointerEvents = 'none';
        pickRock.style.pointerEvents = 'none';
        if(selectPaper.style.display === "block" && npcPaper.style.display === "block"){
            comment.textContent = "Draw!";
            comment.style.backgroundColor = "#454340";

        }else if(selectPaper.style.display === "block" && npcScissor.style.display === "block"){
            comment.textContent = "You Lose";
            comment.style.backgroundColor = "red";
            npcScores++;
            npcScoreText.textContent = `${npcScores}`;

        }else if(selectPaper.style.display === "block" && npcRock.style.display === "block"){
            comment.textContent = "You Won";
            comment.style.backgroundColor = "green";
            playerScores++;
            playerScoreText.textContent = `${playerScores}`;
            
        }if(playerScores === 5){
            comment.textContent = "Congratulation You Win";
            
        }else if(npcScores === 5){
            comment.textContent = "Better Luck next Game";
        }
    }
});

pickRock.addEventListener("click", function(){
    let npc = [npcScissor, npcPaper, npcRock];
    let math = npc[Math.floor(Math.random() * npc.length)];
    selectRock.style.display = "block";
    Reset.style.display = "block";
    if(selectScissor !== "block"){
        math.style.display = "block";
        pickScissor.style.pointerEvents = 'none';
        pickPaper.style.pointerEvents = 'none';
        pickRock.style.pointerEvents = 'none';
        if(selectRock.style.display === "block" && npcRock.style.display === "block"){
            comment.textContent = "Draw!";
            comment.style.backgroundColor = "#454340";  

        }else if(selectRock.style.display === "block" && npcScissor.style.display === "block"){
            comment.textContent = "You Won";
            comment.style.backgroundColor = "green";
            playerScores++;
            playerScoreText.textContent = `${playerScores}`;
        
        }else if (selectRock.style.display === "block" && npcPaper.style.display === "block"){
            comment.textContent = "You Lose";
            comment.style.backgroundColor = "red";
            npcScores++;
            npcScoreText.textContent = `${npcScores}`;

        }if(playerScores === 5){
            comment.textContent = "Congratulation You Win";
            
        }else if(npcScores === 5){
            comment.textContent = "Better Luck next Game";
        }

    }
});

Reset.addEventListener("click", function(){
    if(selectScissor.style.display === "block" || selectPaper.style.display === "block" || selectRock.style.display === "block"){
        selectScissor.style.display = "none";
        selectPaper.style.display = "none";
        selectRock.style.display = "none";
        npcScissor.style.display = "none";
        npcPaper.style.display = "none";
        npcRock.style.display = "none";
        Reset.style.display = "none";
        math.style.display = "none";
        pickScissor.style.pointerEvents = 'auto';
        pickPaper.style.pointerEvents = 'auto';
        pickRock.style.pointerEvents = 'auto';
        comment.textContent = "Bato Bato Pick";
        comment.style.backgroundColor = "black";
        if(playerScores === 5){
            playerScores = 0;
            npcScores = 0;
            playerScoreText.textContent = `${playerScores}`;
            npcScoreText.textContent = `${npcScores}`;
        
        }else if(npcScores === 5){
            playerScores = 0;
            npcScores = 0;
            playerScoreText.textContent = `${playerScores}`;
            npcScoreText.textContent = `${npcScores}`;
        }
    }
})
