const box = document.querySelectorAll(".box");
const reset = document.getElementById("reset");
let playerO = true;
const win = document.getElementById("win");
const winpattern=[
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6]  // Diagonal from top-right to bottom-left
  ];
box.forEach(b => {
    b.addEventListener("click", () =>
    {
        if (playerO) {
            b.textContent = "O";
            playerO = false;
        }
        else {
            b.textContent = "X"; 
            b.style.color = "orange";
            playerO = true;
        }
        b.disabled = true;
        checkwin();
    })
})
const disable = () => {
    for (let i = 0; i < box.length; i++){
        box[i].disabled = true;
    }
}
const enable = () => {
    for (let i = 0; i < box.length; i++){
        box[i].disabled = false;
        box[i].textContent = "";
        win.textContent = "";
        box[i].style.color = "red";
    }
}
 const checkwin =() =>{
     for (let i = 0; i < winpattern.length; i++){
        let pattern = winpattern[i];
        let posv1 = box[pattern[0]].innerText;  
        let posv2= box[pattern[1]].innerText;  
        let posv3 = box[pattern[2]].innerText;  
        if (posv1 != "" && posv2 != "" && posv3 != "") {
            if (posv1 === posv2 && posv2 === posv3) {
                console.log("winner");
                disable();
                win.textContent = `${posv1} wins the game🎉`;
               
           } 
        }
    }
}
reset.addEventListener("click", () => {
    playerO = true;
    enable();
    box.textContent = "";
})