const { expect, test} = require("@jest/globals")

describe("First Dummy TestCase", () => {
    it("A value to be 1", () => {
        let a = 5;
        expect(a).toBe(5);
    })

    it("resolve to lemon", () => {
        expect(Promise.resolve("lemon")).resolves.toBe("lemon")
    })

    it("reject to lemon", () => {
        expect(Promise.reject(new Error("lemon"))).rejects.toThrowError("lemon")
    })
})
