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
let PlayerTwoPos=StartPos
function play(PlayerPos,dicecount) {
  while(PlayerPos < WinPos)
    {
    PlayerPos = getRandom()
    dicecount++
    let TempPos=(checkOption (PlayerPos));
    PlayerPos=TempPos
    if (PlayerPos == WinPos){
        console.log("Player One is currently at",WinPos,"after throwing",dicecount,"times")
        break
    }
    else if (PlayerOnePos >= WinPos){
        console.log("Player One is currently at",PlayerPos,"after throwing",dicecount,"times")
        PlayerPos=(PlayerPos-Dice)
        break
}
else {
    PlayerPos=StartPos
    console.log("PLAYER One IS AT",PlayerPos)
}
}
} 
let dice1count=0
function playerone(){
	while(PlayerOnePos < WinPos){
		play(PlayerOnePos,dice1count)
		while(move_type == "LADDER"){
		    play(PlayerOnePos,dice1count)
        playertwo()
    }
    console.log(PlayerOnePos)
    console.log(dice1count)
    }
}
let dice2count=0
function playertwo(){
	while(PlayerTwoPos < WinPos){
		play(PlayerTwoPos,dice2count)
		while(move_type == "LADDER"){
		    play(PlayerOnePos,dice2count)
        playerone()
    }
    console.log(PlayerTwoPos)
    console.log(dice2count)
    }
}
function Compare(PlayerOnePos,PlayerTwoPos){
    if(PlayerOnePos>PlayerTwoPos)
    return (dice1count-dice2count)
    //console.log("PlayerOne wins by",(dice1count-dice2count),"times")
    else if(PlayerTwoPos>PlayerOnePos)
    return (dice2count-dice1count)
    //console.log("PlayerTwo wins by",(dice2count-dice1count),"times")
    else
    console.log("This match is draw.Play again!!")
}
playerone()
module.exports = {play,checkOption,getRandom,playerone,playertwo,Compare}
