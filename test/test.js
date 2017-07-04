const assert  = require('chai').assert;
const Mammal = require('../oop.js').mammals;
const Rodent = require('../oop.js').rodents;
describe('Mammal',function(){
  it('should contain a constructor method',function(){
      assert.deepEqual(typeof Mammal.constructor(),'function');
  });
  it('')
});
describe('Rodent',function(){
  it('should contain a constructor method',function(){
    assert.deepEqual(typeof Rodent.constructor(),'function');
  })
  it('should extend class Mammal',function(){
    assert.equal(Rodent.prototype instanceof Mammal,true);
  })
})
