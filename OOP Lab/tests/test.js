var myApp = require('../app.js');

describe("Animal Class Tests", function() {

    it("The animal should be a type of `object`, and an instance of the `Animal` class", function() {
      var bingo = new myApp.Animal('Dog');
      expect(typeof bingo).toEqual(typeof {});
      expect(bingo instanceof myApp.Animal).toBeTruthy();
    });

    it("The animal should be called 'Unknown Animal' if no type is passed as a parameter", function() {
      var unknown = new myApp.Animal();
      expect(unknown.type).toEqual("Unknown Animal");
      expect(unknown.sound).toBe("Trying to make a sound...");
    });

    it("The animal type and sound should be a property of the Animal", function() {
      var simba  = new myApp.Animal('Lion', 'Roar');
      expect(simba.type).toBe('Lion');
      expect(simba.sound).toBe('Roar');
    });

    it("The animal shoud have four (4) legs except its a Chicken or Bird", function() {
      var bingo = new myApp.Animal('Dog', 'bark');
      expect(bingo.numOfLegs).toBe(4);

      var parrot  = new myApp.Animal('Bird', 'cuckoo');
      expect(parrot.numOfLegs).toBe(2);
   	  parrot.move();
      expect(parrot.moving).toBe(parrot.type + " is Flying ");
    });

    it("The animal shoud have no (4) legs if its a Fish", function() {
      var sardine = new myApp.Animal('Fish', 'bubble');
      expect(sardine.numOfLegs).toBe(0);

   	  sardine.move();
      expect(sardine.moving).toBe(sardine.type + " is Swimming ");
    });
});