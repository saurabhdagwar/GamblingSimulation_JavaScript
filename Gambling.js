//Constants
const STAKE_AMOUNT = 100 ;
const BETTING_AMOUNT = 1 ;
const MONTHLY_DAYS = 20 ;
//Variables
let game_result;
let monthly_stake = 0;
let monthly_investment = 0;
let luckiest_count = 0;
let unluckiest_count = 0;
var user_decide = 1;
var luckiest_days = [];
var unluckiest_days = [];
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
        switch(game_result){
            case ( STAKE_AMOUNT / 2 ) :
                console.log(`Result of day ${day} is Gambler loss $${game_result}`);
                unluckiest_days[++unluckiest_count] = day; 
                break;
            default :
                console.log(`Result of day ${day} is Gambler Won $${game_result}`);
                luckiest_days[++luckiest_count] = day;
                break;
        }
        monthly_investment = monthly_investment + STAKE_AMOUNT;
        monthly_stake = monthly_stake + game_result;
    }
    process.stdout.write("Luckiest Days : ")
    for(var count = 1 ; count < luckiest_days.length ; count++){
        process.stdout.write(", "+luckiest_days[count]);
    }
    process.stdout.write("\nUnluckiest Days : ")
    for(var count = 1 ; count < unluckiest_days.length ; count++){
        process.stdout.write(", "+unluckiest_days[count]);
    }
    if(monthly_stake > monthly_investment){
        var total = monthly_stake - monthly_investment ;
        console.log(`\n Gambler Won $${total} in this month`)
    }
    else{
        var total =  monthly_investment - monthly_stake ;
        console.log(`\n Gambler Loss $${ total } in this month`) 
    }
    var prompt = require('prompt-sync')();
    if(monthly_stake > monthly_investment){
       var user_decide = prompt('Press 1 to continue game : ')
       if(user_decide == 1){
           GamblingGame();
       }
    }
}
GamblingGame();