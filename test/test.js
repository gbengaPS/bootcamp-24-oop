const assert  = require('chai').assert;
const Mammal = require('../oop.js').mammals;
const Rodent = require('../oop.js').rodents;
const Primate = require('../oop.js').primates;

//Mammal tests
describe('Mammal',function(){
   let dog= new Mammal('terestrial',true,6);
  it('should contain a constructor method',function(){
      assert.deepEqual(typeof Mammal.constructor(),'function');
  });
  it('should contain private variables',function(){
    assert.equal(typeof Mammal.prototype.limbs,'undefined');
  })
  it('should contain a method that gets a private variable',function(){
    assert.isOk( dog._getLimbs(),'message')
  })
  it('should contain a method that verifies its inputs',function(){
      assert.notOk(Mammal.prototype.makeSound(343434),'should return false');
  });
});

//Rodent tests
describe('Rodent',function(){
  it('should contain a constructor method',function(){
    assert.deepEqual(typeof Rodent.constructor(),'function');
  })
  it('should extend class Mammal',function(){
    assert.equal(Rodent.prototype instanceof Mammal,true);
  })
})


//Primate tests
describe('Primate',function(){
  let monkey= new Primate('terestrial',true,9);
  it('should contain the  constructor function' ,function(){
      assert.equal(typeof Primate.constructor,'function')
  });
  it('should inherit the Mammal class',function(){
      assert.equal(Primate.prototype instanceof Mammal,true);
  });
  it('should contain a method that verifies its inputs',function(){
      assert.notOk(Primate.prototype.buildFamily(2,4),'');
  });
  it('should always return an integer for the number of limbs',function(){
    assert.equal(typeof eval(monkey._getLimbs()),'number');
  });
  it('number of limbs should not be modifiable',function(){
      assert.notOk(monkey._setLimbs(),'should return error')
  });
});