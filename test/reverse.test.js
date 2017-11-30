let reverse = require('../lib/reverse')
let expect = require('chai').expect

describe("#reverse", function() {
    it("String reversed", function() {
        expect(reverse("hello")).to.equal("olleh");
    })

    it("String reversed", function() {
        expect(reverse("hello", "-")).to.equal("o-l-l-e-h")
    })
})

// describe("#reverse-hello-dash", function() {
//     it("String reversed", function() {
//         expect(reverse("hello", "-")).to.equal("o-l-l-e-h")
//     })
// })