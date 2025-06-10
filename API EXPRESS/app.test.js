const request = require("supertest")
const app = require("./app")

describe("teste do app", () => {

    test("teste do ping com sucesso", async () => {
        // GIVEN

        // WHEN
        const result = await request(app).get("/ping");
        // THEN
        expect(result.statusCode).toBe(200);
        expect(result.body.message).toEqual("pong");
        expect(result.body.class).toEqual("test");
        expect(result.body).toEqual({
            message: "pong",
            class: "test"
        });
    });
});