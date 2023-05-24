console.log("Welcome to TIC TAC TOE")

let turnchange= new Audio("ting.wav")      //turn change of x and y
let fail= new Audio("fail.wav")
let turn= "X";
let isgameover=false;

//function to change turn
const changeTurn =()=>{
    return turn==="X"?"0":"X"
}


//function to check for a win
const checkWin= ()=>{
    let boxtext =document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2,5,5,0],//this is the 1st 'e' and it represents the 1st row 
        [3,4,5,5,15,0],// 2nd row
        [6,7,8,5,25,0],// 3rd row
        [0,3,6,-5,15,90],//from 3rd index ie from fourth element the translate and rotate portion of the line in the order 
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!==""))
        {
        // here we checking blank sice initially all willl be blank
            document.querySelector('.info').innerText= boxtext[e[0]].innerText+ "Won"
            isgameover=true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="150px";
            document.querySelector('.line').style.width='20vw'
            document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
        }
    })

}



//Game logic
//
let boxes=document.getElementsByClassName("box");//it will an HTML collection
Array.from(boxes).forEach(element => {
    let boxtext=element.querySelector('.boxtext');//here we wrote elemnt instead of document sice we need to fetch the boxtext of the selected element for each box
    element.addEventListener('click', ()=>
    {
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            turnchange.play();
            checkWin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText="Turn for" +turn;
            }// not operator just reverses the value
        }
    })
})

//add onclick listener to reset button
reset.addEventListener('click',()=>{
    let boxtexts= document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEaach(element=>{
        element.innerText=""
    });
    turn="X"
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText="Turn for" +turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="0px";
    
})

