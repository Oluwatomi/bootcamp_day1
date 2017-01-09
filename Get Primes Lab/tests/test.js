// testing code goes here

'use strict'

var myApp = require('../app.js');

describe("Get Primes Tests ", function() {

  describe("Should return [] for any negative number and numbers less than 2", function() {
    it("should return [] for 1", function() {
        expect(myApp.getPrimes(1)).toEqual([]);
    });
    it("should return [] for -5", function() {
        expect(myApp.getPrimes(-5)).toEqual([]);
    });
  });

  describe("Should return an array of primes for any number greater than or equal to 2", function() {
    it("should return [2] for 2", function() {
        expect(myApp.getPrimes(2)).toEqual([2]);
    });
    it("should return [2,3,5,7] for 10", function() {
        expect(myApp.getPrimes(10)).toEqual([2,3,5,7]);
    });
    it("should return [2,3,5,7,11,13,17,19,23,29,31,37] for 40.85", function() {
        expect(myApp.getPrimes(40.85)).toEqual([2,3,5,7,11,13,17,19,23,29,31,37]);
    });
    it("should return [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97] for 100", function() {
        expect(myApp.getPrimes(100)).toEqual([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]);
    });
  });


  describe("Testing the length of the prime numbers array", function() {
    it("should be 168 prime numbers between 0 and 1000", function() {
        // There are 168 prime numbers between 0 and 1000
        expect(myApp.getPrimes(1000).length).toEqual(168);
    });
    it("should be 303 prime numbers between 0 and 2000", function() {
        // There are 303 prime numbers between 0 and 2000
        expect(myApp.getPrimes(2000).length).toEqual(303);
    });
  });

  describe("Test if the input entered is incorrect", function() {
    it("should return \"Input must be a Number\" for a string", function() {
        expect(myApp.getPrimes("10")).toEqual("Input must be a Number");
    });
    it("should return \"Input must be a Number\" if input is undefined", function() {
        expect(myApp.getPrimes(undefined)).toEqual("Input must be a Number");
    });
  });

});