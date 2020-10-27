//Constants
const STAKE_AMOUNT = 100 ;
const BETTING_AMOUNT = 1 ;
//Variables
let game_result;

function GamblingGame(){
    game_result = STAKE_AMOUNT;
    while( game_result > ( STAKE_AMOUNT / 2 ) && game_result < ( STAKE_AMOUNT + ( STAKE_AMOUNT/2 ))){
        var game_check = Math.floor( Math.random() * 2 );
        if(game_check == BETTING_AMOUNT){
            game_result = game_result + BETTING_AMOUNT ;
        }
        else{
            game_result = game_result - BETTING_AMOUNT ;
        }
        console.log(`Game Result ${game_result}`);
    }
}
GamblingGame();