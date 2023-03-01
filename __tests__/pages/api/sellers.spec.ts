const request = require("supertest");
const app = require("../../../pages/api/sellers");

const expectedResponse = [
    {
        _id: "63ef29d2559dc2df3120132a",
        name: "hgGH",
        contact: "ghhg",
        location: "gh",
        address: "ghgh",
        gender: "gh",
        image: "hg",
        listings: 0,
        __v: 0,
    },
    {
        _id: "63ef2a18559dc2df31201330",
        name: "John Doe",
        contact: "8899889988",
        location: "New york",
        address: "st. street",
        gender: "Male",
        image: "https://fastly.picsum.photos/id/814/200/200.jpg?hmac=cpUMsYdlkULqgLonFpQyNS2QBtsSI7vTX1_ew8-lS8A",
        listings: 0,
        __v: 0,
    },
    {
        _id: "63f5e21585b90fa4a101ad01",
        name: "hj",
        contact: "7488659822",
        location: "jj",
        address: "hg",
        gender: "jggj",
        image: "h",
        listings: 0,
        __v: 0,
    },
    {
        _id: "63fc8584c288b8bb2638da68",
        name: "kjk",
        contact: "hjhj",
        location: "hjhj",
        address: "hjhj",
        gender: "hj",
        image: "hj",
        listings: 0,
        __v: 0,
    },
];
describe("Checking Sellers API endpoints", () => {
    test("GET /api/sellers should return a list of posts", async () => {
        const response = await request(app).get("/api/sellers");
        expect(response.body).toEqual(expectedResponse);
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveLength(4);
    });

    // test("POST /api/posts should create a new post", async () => {
    //     const response = await request(app)
    //         .post("/api/posts")
    //         .send({ title: "Test Post", content: "This is a test post." });
    //     expect(response.statusCode).toBe(201);
    //     expect(response.body).toHaveProperty("post");
    //     expect(response.body.post.title).toBe("Test Post");
    // });
});

export {};
