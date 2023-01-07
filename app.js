

var color = 'black';
let click = false;
document.getElementById('paint').addEventListener('click',function(e){
    if(e.target.tagName != "BUTTON"){
        click= !click;
        if(click)
        {
            document.querySelector('.mode').textContent='Mode : COLORING'
        }
        else
        {
            document.querySelector('.mode').textContent='Mode : NOT COLORING'   
        }
    }
} );

function createBoard(size) //creates grid od given size
{
    let board = document.querySelector('.board'); //we select the element who's id is 'board'
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows= `repeat(${size},1fr)`;

    let amt = size*size;
    for(let i=0; i<amt;i++)
    {
        let box = document.createElement('div');
        box.classList.add('box');
        box.addEventListener('mouseover',colorBox)
        board.insertAdjacentElement('beforeend',box);
    }
}

createBoard(16);

function changeSize(input)
{
    if(input >=2 && input<=100)
    {
        document.querySelector('.error').style.display = 'none';
        createBoard(input);

    }
    else{
        document.querySelector('.error').style.display = 'flex';
        console.log('too many squares too create');
    }
    
}

function colorBox()
{
    if(click){
    if(color === 'random')
    {
        this.style.backgroundColor=`hsl(${Math.random()*360},100%,50%)`;
    }
    else{
        this.style.backgroundColor=color;
    }
}
}
function changeColor(choice)
{
   
    color = choice;
}

function resetBoard()
{
    let reset = document.querySelectorAll('.box');
    reset.forEach((div) => div.style.backgroundColor='white');

}