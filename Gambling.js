//Constants
const STAKE_AMOUNT = 100 ;
const BETTING_AMOUNT = 1 ;
const MONTHLY_DAYS = 20 ;
//Variables
let game_result;

function GamblingGame(){
    for( var day = 1 ; day <= MONTHLY_DAYS ; day++ ){
        game_result = STAKE_AMOUNT;
        while( game_result > ( STAKE_AMOUNT / 2 ) && game_result < ( STAKE_AMOUNT + ( STAKE_AMOUNT/2 ))){
            var game_check = Math.floor( Math.random() * 2 );
            switch(game_check){
                case BETTING_AMOUNT :
                    game_result = game_result + BETTING_AMOUNT ;
                    break;
                default :
                    game_result = game_result - BETTING_AMOUNT ;
                    break;
            }
        }
        console.log(`Game Result of ${day} day is : ${game_result}`);
    }
}
GamblingGame();