//Modeling a real life scenario using object oriented concepts
class Mamalia{

  constructor(habitat,domesticated,gestation){

        let _homeostasis = 'warm-blooded';
        let _fertilization = 'Internal';
        let _limbs = 4;
        this.habitat = habitat;
        this.domesticated = domesticated;
        this.gestation = gestation;

        // this is an implemetation of encapsulation
        
        this._getLimbs = function(){
          return _limbs;
        }
        this._setLimbs=function(limb){
          return _limbs=limb;
        }
        this._getFertilization = function(){
          return _fertilization + " fertilization.";
        }

        this._getHomeostasis = function(){
          return homeostasis;
        }

  }

  makeSound(sound){
    if(typeof(sound) !='string'){
      return false;
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
        const _numberOfToes = 5;
        let _hasNails=9;
        super(habitat,domesticated,gestation);
         this._hasNails ='Animals has nails instead of claws';
        this._getHasNails = function(){
          return hasNails;
        }

    }


    buildFamily(primate1,primate2){
      if(typeof primate1 =='string' && typeof primate2=='string'){
        let married= primate1+" marries "+primate2;
        return married;
      }
      
      else{
        return false;
      }

    }

}
'use strict';
class Canivora extends Mamalia{
  
  constructor(habitat,domesticated,gestation){
        const _numberOfToes = 4;
        let _hunts;
        if(domesticated==false){
          _hunts = 'Animal hunts';
        }
        else{
          _hunts = 'Animal does not hunts';
        }
        super(habitat,domesticated,gestation);

        this._getHunts = function(){
          return _hunts;
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
module.exports.primates = Primate;
//Testing the classes

let dog = new Canivora('terestrial',true,8)
let monkey= new Primate('terestrial',true,9)
let x = new Mamalia('aborea',true,3);
console.log(dog.gestation);
console.log(dog._getFertilization());
console.log(dog.reproduce(1));
console.log(dog.makeSound('barks'));

console.log(monkey._gestation);
console.log(monkey._hasNails);
console.log(x._getFertilization())