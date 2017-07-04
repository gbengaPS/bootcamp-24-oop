//Modeling a real life scenario using object oriented concepts
class Mamalia{

  constructor(habitat,domesticated,gestation){

        let homeostasis = 'warm-blooded';
        let fertilization = 'Internal';
        let limbs = 4;
        this.habitat = habitat;
        this.domesticated = domesticated;
        this.gestation = gestation;


        this.getLimbs = function(){
          return limbs;
        }

        this.getFertilization = function(){
          return fertilization + " fertilization.";
        }

        this.getHomeostasis = function(){
          return homeostasis;
        }

  }

  makeSound(sound){
    if(typeof(sound) !='string'){
      return undefined
    }
    else{
      let result = 'Animal '+sound;
      return result;
    }
  }
  reproduce(numberOfOffspring){
    let offspring;
    if(numberOfOffspring<1){
      return undefined;
    }
    if(numberOfOffspring==1){
      offspring =' offspring';
    }
    else{
      offspring = ' offsprings';
    }
    let result = 'Animal gave birth to '+numberOfOffspring+offspring;
    return result;
  }

}

//sub classes (Inheritance)

class Primate extends Mamalia{

    constructor(habitat,domesticated,gestation){
      //Encapsulation
        let numberOfToes = 5;
        let hasNails=9;
        super(habitat,domesticated,gestation);
         this.hasNails ='Animals has nails instead of claws';
        this.getHasNails = function(){
          return hasNails;
        }
    }

}

class Canivora extends Mamalia{
  
  constructor(habitat,domesticated,gestation){
        let numberOfToes = 4;
        let hunts;
        if(domesticated==false){
          hunts = 'Animal hunts';
        }
        else{
          hunts = 'Animal does not hunts';
        }
        super(habitat,domesticated,gestation);

        this.getHunts = function(){
          return hunts;
        }

        
    }

}


class Rodentia extends Mamalia{
  constructor(habitat,domesticated,gestation){
        super(habitat,domesticated,gestation);
    }
}

module.exports.mammals = Mamalia;
module.exports.rodents = Rodentia;
//Testing the classes

let dog = new Canivora('terestrial',true,8)
let monkey= new Primate('terestrial',true,9)

console.log(dog.gestation);
console.log(dog.getFertilization());
console.log(dog.reproduce(1));
console.log(dog.makeSound('barks'));

console.log(monkey.gestation);
console.log(monkey.hasNails);
