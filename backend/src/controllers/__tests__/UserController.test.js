const User = require("../../models/User");
const UserController = require("../UserController");
const { users, req } = require('../utils');

const res = {};
res.status = jest.fn((status) => ({
  json: jest.fn((json) => ({ res: { data: json, status: status } })),
}));

describe("Test User Controller", () => {
    it("should return 2 users", async () => {
      User.findAll = jest.fn().mockReturnValue(users);
      const {res: response} = await UserController.index(req, res);
      expect(response.status).toBe(200);
      expect(response.data.length).toBe(2);
    });
    it("should create user", async () => {
      User.create = jest.fn().mockReturnValue(users[0]);
      const { res: response } = await UserController.store(req, res);
        expect(response.status).toBe(200);
        expect(response.data.name).toEqual("test1");
    });
     it("should throw error creating user", async () => {
       User.create = jest.fn().mockImplementation(() => {
         throw new Error("User not found");
       });
       const { res: response } = await UserController.store(req, res);
       expect(response.status).toBe(500);
       expect(response.data).toEqual("Failed to create user");
     });
});

