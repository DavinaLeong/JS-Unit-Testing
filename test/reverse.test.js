let reverse = require('../lib/reverse');
let expect = require('chai').expect;

describe("#reverse", () => {
    it("String reversed", () => {
        expect(revese("hello").to.equal("olleh"));
    });
});

describe("#reverse-dash", () => {
    it("String reversed", () => {
        expect(revese("hello", "-").to.equal("o-l-l-e-h"));
    });
});