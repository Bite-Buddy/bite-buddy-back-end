import request from "supertest"
import assert from "assert"
import { default as app } from "../server"

describe("/", () => {
    test("Should exist", async () => {
        return request(app).get("/")
            .then((res) => {
                expect(res.statusCode).toBe(200);
            });
    });
})