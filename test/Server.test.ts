import request from "supertest"
import assert from "assert"
import { default as app } from "../server"
import { dummyUser,dummyKitchen } from "./dummy"

describe("/", () => {
    test("Should exist", async () => {
        return request(app).get("/")
            .then((res) => {
                expect(res.statusCode).toBe(200);
            });
    });
})

describe("/:kitchenId", () => {
    describe("/#GET", () => {
        test("Should exist")
    });
    describe("/#DELETE", () => { });

    /**For food */
    describe("/:kitchenId/:ingredientId", () => {
        describe("/#GET", () => {
            test.todo("Should get the food item with given ingredientId")
        });
        describe("/#PATCH", () => {
            test.todo("Should update the food item with given ingredientID and value");
            test.todo("Should return error if parameter is not given");
            test.todo("Should return error if ")
        });
    });

    describe("/:kitchenId/add", () => {
        describe("/#POST", () => { test.todo("Should add new kitchen") });
    });
});

