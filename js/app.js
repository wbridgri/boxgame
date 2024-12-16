const colors = ['black', 'white', 'yellow', 'red', 'blue', 'purple', 'green', 'orange', 'brown' ]

const boxes = [
    {id: 0, color: colors[0]},
    {id: 1, color: colors[1]},
    {id: 2, color: colors[2]},
    {id: 3, color: colors[3]},
    {id: 4, color: colors[4]},
    {id: 5, color: colors[5]},
    {id: 6, color: colors[6]},
    {id: 7, color: colors[7]},
    {id: 8, color: colors[8]}
]



// Make an array of nine colors; you can call it “colors”
// Make an array of objects called “boxes”; each object should have two properties; 
//  id, which will have a unique id number, 
//  and color which will be one of the colors in the color array
// For each object in the boxes array
// Create a div
// Add the class “box”
// Set the id to “box-${id}
// The backgroundColor of the box should be the color in its property
// The box should have a width and height of 200px
// Append each box to the gameBoard 
// Add a click event listener to each box
// When each box is clicked it should randomly change its backgroundColor to one of the colors in the colors array 
// The object of the game is to get each box to be the same color. 
// Create a variable called count and initialize it at 0
// For each time a box is clicked increment count
// Display count in countDisplay 


const gameBoard = document.getElementById('gameBoard');
const countDisplay = document.getElementById('countDisplay')
let gameWon = false;
let count = 0

//  Generates boxes with class .box and background color

function checkWin() {
    const firstColor = boxes[0].color;
    const winCondition = boxes.every(box => box.color === firstColor);
    if (winCondition) {
        gameWon = true;
        winFunction();
    }
}

function winFunction() {
    countDisplay.innerText = `You Win!`
    boxes.forEach(box => {
        const boxElement = document.getElementById(`box-${box.id}`)
        boxElement.removeEventListener('click', ()=>{

        })
    })

}

function handleClick( event, box) {
    if(gameWon) return; 

    const randomColor = colors[Math.floor(Math.random() * colors.length)]
        box.color = randomColor;
        event.target.style.backgroundColor = randomColor;
        count++;
        countDisplay.innerText = `${count}`

        checkWin();
}



boxes.forEach(box => {
    const div = document.createElement('div');
    div.classList.add('box');
    div.id = `box-${box.id}`; 
    div.style.backgroundColor = box.color;
    div.style.width = '200px';
    div.style.height = '200px';
    gameBoard.appendChild(div);

    div.addEventListener('click', (event) => handleClick(event, box));
    
    
    
    
    
    
    
    
    
});


