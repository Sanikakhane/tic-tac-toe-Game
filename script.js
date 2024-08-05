let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-button");
let newGamebtn=document.querySelector("#new-game");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO= true ;    //player X, player O

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else
        {
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWiner();
    });
});







function checkWiner() {
    for (let p of winPatterns) {
        let pos1val = boxes[p[0]].innerText;
        let pos2val = boxes[p[1]].innerText;
        let pos3val = boxes[p[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner", pos1val);

                showWinner(pos1val);

            }
        }
    }
}

const showWinner =(winner)=>
{
    msg.innerHTML=`Congratulation ,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};
const enableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};
const resetGame = () =>
{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};


newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);