let dis=document.querySelector(".gm");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true; 
let gameOver = false;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8], 
];

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    resetBtn.innerText="New Game";
    dis.classList.add("hide");
}
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);
            gameOver = true;
            boxes.forEach(box => box.disabled = true); // Disable further clicks after win
            return;
        }
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (!gameOver) {
            if (turn) {
                box.innerText = "O";
            } else {
                box.innerText = "X";
            }
            box.disabled = true;
            checkWinner();
            turn = !turn; // Switch turn
        }
    });
});

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turn = true;0
    gameOver = false;
    msgContainer.classList.add("hide");
    dis.classList.remove("hide");
    resetBtn.innerText="Reset Game";
});
