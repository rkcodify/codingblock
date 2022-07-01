const food = document.querySelector(".food");
console.log(food);

const head = document.querySelector(".head");
console.log(head);

let board = document.querySelector(".board");

let score = document.querySelector(".score1");

let headposition = {x:13,y:13};
let foodposition = {x:10,y:10};
let inputdir = {x:0,y:0};
let body = [];
let newdir = {x:0,y:0}
let snakearry=[];
let i=1;
let u=0;
let snakespeed = 400; 

// snake.addEventListener("keyboard",function move() {
//             if(keyboard=="arrowUp"){
//                 head.style.grid-column-start
//             } 
// })

function main(ctime){
    window.requestAnimationFrame(main);
    let c1 = ctime/snakespeed;
    if(c1>i){
        gameengine();
        i=i+1;
    }

}

function gameengine(){

    food.style.gridRowStart    = foodposition.x;
    food.style.gridColumnStart = foodposition.y;
    
        if(headposition.x==foodposition.x && headposition.y==foodposition.y){

                let snakeelement = document.createElement("div");
                snakeelement.classList.add("snakebody")

                board.appendChild(snakeelement);

                u=u+1;
                
                foodposition.x= Math.floor(Math.random() * 30) + 1;
                foodposition.y= Math.floor(Math.random() * 30) + 1;
                score.innerText=u;
                snakespeed = snakespeed - 10;
                  }
                

         else if(headposition.x==30 || headposition.y==30 || headposition.x==0 || headposition.y==0){
            window.confirm(" GAME OVER : Press ok to play again");
             if(confirm){
                location.reload();
             }
             else{
                 location.reload();
             }
        }
    
      head.style.gridRowStart=headposition.x+inputdir.x;
      head.style.gridColumnStart=headposition.y+inputdir.y;
      newdir = {x:(headposition.x+inputdir.x),y:(headposition.y+inputdir.y)};
      

      if(u>0){
          let snakebody = document.querySelectorAll(".snakebody")
        
          
          snakearry[0]={x:parseInt(snakebody[0].style.gridRowStart),y:parseInt(snakebody[0].style.gridColumnStart)};

          for (let j = 1; j<snakebody.length; j++) {
            snakebody[j].style.gridRowStart=snakearry[j-1].x;
            snakebody[j].style.gridColumnStart=snakearry[j-1].y;
          }
          for (let j = 1; j< snakebody.length; j++) {
            snakearry[j]={x:parseInt(snakebody[j].style.gridRowStart),y:parseInt(snakebody[j].style.gridColumnStart)};
            }
          snakebody[0].style.gridRowStart=headposition.x;
          snakebody[0].style.gridColumnStart=headposition.y;
          }
    headposition = newdir;
}

window.requestAnimationFrame(main)

window.addEventListener("keydown",e=>{
    switch (e.key) {
        case "ArrowUp":
            inputdir.x=-1;
            inputdir.y=0;
            break;

        case "ArrowDown":
            inputdir.x=1;
            inputdir.y=0;
            break;

        case "ArrowRight":
            inputdir.x=0;
            inputdir.y=1;
            break;

        case "ArrowLeft":
            inputdir.x=0;
            inputdir.y=-1;
            break;

        default:
            break;
    }
})