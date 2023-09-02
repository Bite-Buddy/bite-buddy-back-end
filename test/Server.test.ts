import request from "supertest"
import assert from "assert"
import { default as app } from "../server"
import { dummyUser, dummyKitchen } from "./dummy"

describe("/", () => {
    test("Should exist", async () => {
        return request(app).get("/")
            .then((res) => {
                expect(res.statusCode).toBe(200);
            });
    });
})

describe("/:kitchenId", () => {
    describe("/#GET", () => { test.todo("Should get kitchen with given kitchenID") });
    describe("/#DELETE", () => { test.todo("Should delete the record from the kitchen table and userkitchen table with given ID") });

    /**For food */
    describe("/:kitchenId/:ingredientId", () => {
        describe("/#GET", () => {
            test.todo("Should get ingredient in the kitchen with given IDs")
            test.todo("Should return error when wrong ID was passed")

        });
        describe("/#PATCH", () => {
            test.todo("Should update the food item with given ingredientID and value");
            test.todo("Should return error if parameter is not given");
            test.todo("Should return error if ")
        });
    });

    describe("/:kitchenId/add", () => {
        describe("/#POST", () => {
            test.todo("Should create the userkitchen table with given id");
            test.todo("Should add the record in the kitchen table");
        });
    });
});

describe("/logout", () => {
    describe("/#GET", () => { test.todo("Should logout") });
});

describe("/settings", () => {
    describe("/#GET", () => { test.todo("Should get user's settings")/**Shouldn't it to be included in user? */ })
});