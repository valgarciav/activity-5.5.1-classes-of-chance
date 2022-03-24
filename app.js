class Casino {
  constructor(player) {
    this.player = player;
    this.timesPlayed = 0;
  }
  playGame(betAmount) {
    if (Math.random() <= 0.5) {
      // when the casino wins
      console.log(`${this.player} wins!`);
    } else {
      // when the person at the casino wins
      console.log(
        `You won ${betAmount * this.timesPlayed + 1} dollars at the ${
          this.player
        }!`
      );
    }
  }
}

// TESTS
const myCasino = new Casino("HackerU Casino");
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);
//Activity 1
// BONUS TESTS
/*
const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);
*/

// Extra BONUS TESTS
/*
const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
*/

// Vehicle base class
class Vehicle {
  constructor(location, LineofBusiness) {
    this.location = location;
    this.LineofBusiness = LineofBusiness;
  }
}
let car_1 = new ("Las Vegas, Nevada", "Corporate Headquarters")();
let car_2 = new ("Miami, FL", "Cars")();
let car_3 = new ("Charlotte, NC", "Trucks")();
let car_4 = new ("Chicago, Illinois", "SUVs")();
car_1.logVehicle();
car_2.logVehicle();
car_3.logVehicle();
car_4.logVehicle();
