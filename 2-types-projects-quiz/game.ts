type Direction = 'up' | 'down' | 'left' | 'right'
const position={x:0,y:0}
function move2(direction: Direction ){
    switch(direction){
        case 'up':
             position.y++
             break;
        case 'down':
             position.y--
             break;
        case 'left':
             position.x--
             break;
        case 'right':
             position.x++
             break;
    }
    return position
}
console.log(move2('up'))
console.log(move2('down'))
console.log(move2('left'))
console.log(move2('right'))