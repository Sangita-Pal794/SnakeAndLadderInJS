const WinPos=100
var StartPos=0
const MOVE_TYPE_DETAILS = {

    NOPLAY: 1,
    SNAKE:  2,
    LADDER: 3,
};
Object.freeze = MOVE_TYPE_DETAILS;
function getRandom(){
let Dice = ( 1 + Math.floor(Math.random() * 6))
    return Dice
}
let move_type = Math.floor(Math.random() * 4);
function checkOption  () {
	switch (move_type) {  
            case 1:
            return (StartPos+0);
            case 2:
            return (StartPos+getRandom());
            case 3:
            return (StartPos-getRandom());
            default:
            return 0;
    }
}
let PlayerOnePos=StartPos
let dice1count =0
function play() {
while(PlayerOnePos <= WinPos)
    {
    PlayerOnePos = getRandom()
    dice1count++
    let TempPos=(checkOption (PlayerOnePos));
    PlayerOnePos=TempPos
    if (PlayerOnePos == WinPos){
        console.log("Player One is currently at",WinPos,"after throwing",dice1count,"times")
        exit
    }
else if (PlayerOnePos >= WinPos){
        console.log("Player One is currently at",PlayerOnePos,"after throwing",dice1count,"times")
        PlayerOnePos=(PlayerOnePos-Dice)
}
else {
    PlayerOnePos=StartPos
}
}
} 

module.exports = {play,checkOption,getRandom}

