let boxes=document.querySelectorAll('.box');
let reset_btn=document.querySelector('.rst-btn');
let msg=document.querySelector('.msg');
let hide=document.querySelector('.hide');
let newGame=document.querySelector('.new-game');

let turnX=true;
let count=0;

let winningPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
];

function disable(){
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}

function enable(){
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
       

    })
    hide.classList.add('hide');

}

boxes.forEach((box)=>{

    box.addEventListener('click',()=>{
        if(turnX){
            box.innerText='X';
            turnX=false;

        }
        else{
            box.innerText='O';
            turnX=true;
       }
       box.disabled=true;
       count++;
       
       checkWinner();
       
    
  })
  
})


function draw(){
    hide.classList.remove('hide');
    msg.innerText=`The match is drawn`;
}

let showMsg=(winner)=>{
   hide.classList.remove('hide');
   msg.innerText=`Congratulations! Winner is ${winner}`;
   
   disable();

}

const checkWinner=()=>{
    for(let pattern of winningPatterns)
    { 
         

           let pos1val=boxes[pattern[0]].innerText;
           let pos2val=boxes[pattern[1]].innerText;
           let pos3val=boxes[pattern[2]].innerText;

           if(pos1val!='' && pos2val!=''&& pos3val!='')
           {
               if(pos1val===pos2val && pos2val===pos3val)
                {
                    
                    showMsg(pos1val);
                }
                else if(count==9 )
                {
                    draw();
                }
           }
    }
   
    

}

newGame.addEventListener('click',()=>{
    turnX=true;
    enable();
})

reset_btn.addEventListener('click',()=>{
    turnX=true;
    enable();
})