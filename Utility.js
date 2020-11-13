module.exports = {checkOption}
var WinPos=100
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
};

