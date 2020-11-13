module.exports = {getRandom}
function getRandom(){
let Dice = ( 1 + Math.floor(Math.random() * 6))
    return Dice
}
getRandom()