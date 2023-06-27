

  shipsBeenHit(){
    this.hull -= this.alienFirePower;
    this.hull -= this.aim;
  console.log('Hull after in ships been hit: ' , this.hull)

  console.log(`Oh no!!! The ${this.name} was hit! Now our sheild is ${this.hull}! All hands on Deck!!!\n\n\nShould we recover? `); 
//maybe i can say instead, for if i < ....how can i use it in a for loop?
        let recoverOrNaw = Math.random() >= 0.5;
          // console.log(recoverOrNaw)
          if(recoverOrNaw === true){
            console.log("\nYes! We must recover!\n\n Team! Androids! Get your tools and repair this ship!!!\n....Loading ship repair...\n...Loading ship repair...\n\nAll Systems Ready. \nCOMPLETE!!!\n\n");
            this.hull+= 1;
            this.accuracy++;
            console.log(`New Hull Value: ${this.hull}\n New Accuracy Value: ${this.accuracy}`)
          } else {
            console.log("\nNo!!! No time for that! We must FIGHT !!!")
          }
      }
      //make an attack for 
    ussAttack(){
      this.shipSheild-= 2;
      this.shipSheild-=this.accuracy;
      //the amount of times aliens have been hit
      this.alienDamageCounter++


      console.log("They think they will demolish us on our own turf! Lets show them who dominates this solar system! \n\nAttack!!!");
      console.log("\nEnemy Sheild After Attack: ", this.shipSheild);
      }
      // }

    aliensGetHit(){
      this.shipSheild-= 2;
      this.shipSheild-=this.accuracy;

      this.alienDamageCounter++

      console.log("Although they just got us good, they will not make a fool of us!!!");

      if(this.shipSheild <= 0){
        console.log(`Our ship is destroyed! Hurry! Call in the robot ${this.home}'s fleet!!!\n\n....Calling Fleet....ET PHONE HOME...\n\nThey are here! We will be Victorious!!`)
      }
    }

    hoardAttack(){
      // console.log(alienHoardInstances.forEach(distantComment.alienLazerAttack));
      // for(const ship of alienHoardInstances){
        // distantComment.alienLazerAttack();
        this.hull -= this.alienFirePower;
        this.hull -= this.aim;
        console.log("Alien Lazers: Zwwwom !!!\n\nZwwoom!")
      }
      ussAttacksHoard(){
        this.shipSheild-= 2;
        this.shipSheild-=this.accuracy;
        //the amount of times aliens have been hit
        this.alienDamageCounter++
      }
  }

  class AlienHoard {
    constructor(){
    this.shipHoardObject = new Ship("Alien Zombie Ship", null, null, null, false, "Goreylia", 0);
  }

    // combineShipSheild{
    //   //possibly combining all of the hoards sheild ship together, so that uss can fight them all at once
    // }

    //OR should I move hoard attack/ussAttackHoard into the class above to be accessed?

    }



  const alienHoardInstances = [];
  const constructorValues = ["Alien Ship 1", "Alien Ship 2", "Alien Ship+ 3", "Alien Ship + 4", "Alien Ship 5"]
  for(const value of constructorValues){
    const alienHoardShips = new AlienHoard(value);
    alienHoardInstances.push(alienHoardShips);
  }

  //this is the loop without labeling/putting a number on the ship
  // const alienHoardInstances = [];
  // for(let i = 0; i <= 5; i++){
  //   const alienHoardShips = new AlienHoard("Team Alien");
  //   alienHoardInstances.push(alienHoardShips);


for(const alienHoardShips of alienHoardInstances) {
  alienHoardShips.AlienHoard;
}




// console.log("Alien Hoard Array" , alienHoardInstances)

const motherBoard = new Ship ("USS Assembly Mother Board")

motherBoard.shipSignOn()

//*********pulls the hull number from the class so it can be used in global*********
motherBoard.hull
// // (name , hull = 20 , firepower = 5 , accuracy = .7, ussAssembly = true, home = "Earth",)
const distantComment = new Ship ("Distant Commet" , 0, 0 , 0, false, "Goreylia" )


if (motherBoard.hull === 20){
  distantComment.alienWarCry();
  distantComment.alienLazerAttack();
  motherBoard.shipsBeenHit();
  console.log("Hull Status" , motherBoard.hull)
}


//left off trying to figure out the proper loop/if then stattement to continue the game with ease
//have to figure out how to break or continue to code in order to determine if the game is over or not. Also have to figure out how
//to call the ship hoards in order to attack uss ship and where the depletion of hull and game over comes into play. 

while (motherBoard.hull !== 25 && motherBoard.hull > 0 && distantComment.shipSheild > 0){
  motherBoard.ussAttack();
  distantComment.alienLazerAttack();
  distantComment.shipSheild; 
  if (distantComment.shipSheild <=0) continue;
    console.log(`You'd thought you saw the last of us ${distantComment.home}'s! Say hello to our little friends!`);
    console.log(alienHoardInstances);
  //  console.log(alienHoardInstances.hoardAttack());
    break;  
} 

while (motherBoard.hull > 0 && alienHoardInstances.shipSheild > 0){
  for (i = 0; i < alienHoardInstances[i].length; i++){
    console.log(`Robot from the home planet of ${distantComment.home}, preparing for launch.....\n\nReady to engage. \nATTACK!!!`)
    console.log(alienHoardInstances.hoardAttack());

    }

      hoardAttack();
    }

    
    
    
    //   } else {
  // console.log("Sorry, pathetic humans. The Galactic Forigners Have won.\n\nYour planet will now be depleted of its resources.\nAnd your humans will be taken advantage of.\n")
  //   }

  
distantComment.shipSheild


// }


// console.log(distantComment.alienWarCry())
// console.log(distantComment.alienLazerAttack())

// motherBoard.alienLazerAttack()
// console.log(motherBoard.shipsBeenHit())





//how to call properties of objects from the outside of the class
// console.log(distantComment.aim)



    // alienAttackCry(){
    //   console.log(`Oh! Ho! Their heads are is big as thier planets'!\nThey think they will conqure us!!! They will be sad in the end! \nOur ship's shield is at ${shipSheild}, our lazers are at ${alienFirePower} capacity, and our focus is on ${aim}! 
    // Be prepared for depletion!!! \n\n\n${this.home}'s!!! Attaaaaaaaaaack!!!!`);
    //   }

 // alienEnginesGo(){
  //   let protection = shipSheild;
  //   let powPow = alienFirePower;
  //   let targetOn = aim;
  // }

//I may have to put the shipsheild, alien firepower, and aim in the original class constructor
//this did not work as is, so lets try it again and comment this method out
  // alienLazerAttack(shipSheild = Math.floor((Math.random() * 4) + 3), alienFirePower = Math.floor((Math.random() * 3) + 2), aim = (Math.floor(Math.random() * 3) + 6) / 10,){
  //   shipSheild: shipSheild;
  //   alienFirePower: alienFirePower;
  //   aim: aim;
  //       //go look at how the math was done for the hamster
  //       this.hullDamage = alienFirePower - this.hull;
  //       this.alienFocus = ((aim * this.firepower) - this.hull);
  //       this.humanDamageCounter=+1;


//ships been hit
//Trying to figure out how to subtract from constructor like in hamster exersize!!! this.hull = th
// this.hullDamage = this.alienFirePower - this.hull;
// this.hull-=this.alienFirePower
// // this.alienFocus = (this.aim * this.firepower) - this.hull;
// this.hull-=this.alienFocus

// this.hull+=this.hullDamage
// this.hull+=this.alienFocus


// class GalacticForigner{
//   constructor(name , hull, firepower, accuracy, ussAssembly, home = "Goreylia",)
//   this.name = name;
//   this.hull = hull;
//   this.firepower = firepower;
//   this.accuracy = accuracy;
//   this.ussAssembly = ussAssembly;
//   this.home = home; 


// console.log(alienFirePower)


//Seems like I must 




// shipSheild: Math.floor((Math.random() * 4) + 3);
// alienFirePower: Math.floor((Math.random() * 3) + 2);
// aim: (Math.floor(Math.random() * 3) + 6) / 10;

// distantComment.alienWarCry()
// distantComment.notFromEarth()

// console.log(galacticForigner.notFromEarth(shipSheild, alienFirePower, aim).alienWarCry())

//*********** WHERE DID I LEAVE OFF???? Something is wrong woth my brakets on syntax. It was wording right after I put the random 
//equation in  */





  // notFromEarth(shipSheild, alienFirePower, aim){
  //   shipSheild: shipSheild;
  //   alienFirePower: alienFirePower;
  //   aim: aim;

  // notFromEarth(shipSheild, alienFirePower, aim){
  //   function randomIntegerRange(min, max){
  //     return Math.floor(Math.random() * (max - min + 1)) + min;
  //   }
  //   let shipSheild = randomIntegerRange (3, 6);
  //   let alienFirePower = randomIntegerRange(2, 4);
  //   let aim = randomIntegerRange(.6, .8, )

  //   shipSheild: shipSheild;
  //   alienFirePower: alienFirePower;
  //   aim: aim;

// let powPow = randomIntegerRange(2, 4,);
// powPow = alienFirePower; 
// let protection = randomIntegerRange(3, 6,);
// protection = shipSheild;
// let targetIn = randomIntegerRange(.6, .8, );
// targetIn = aim;