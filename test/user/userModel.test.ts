import { prismaMock } from "../../singleton";
import { createUser, deleteUserById, getUsers } from "../../src/user/userModel";

describe('User Model - createUser', () => {

  it('should create a new user', async () => {
    const user = {
      id: 1,
      supabase_id: "123",
      email: "test@example.com",
    };
    
    prismaMock.user.create.mockResolvedValue(user); //this is what we expect prisma.user.create to return

    await expect(createUser(user)).resolves.toEqual({ //this is what we expect our function to return
      id: 1,
      supabase_id: "123",
      email: "test@example.com",
    });
  });

});

describe("User Model - deleteUserById", () => {

  it("should delete a user given an id", async () => {
    const id = 1;
    const user = {
      id: 1,
      supabase_id: "123",
      email: "test@example.com",
    };

    prismaMock.user.delete.mockResolvedValue(user);

    await expect(deleteUserById(id)).resolves.toEqual({
      id: 1,
      supabase_id: "123",
      email: "test@example.com",
    });
  });

});

describe("User Model - getUsers", () => {

  it('should return all existing users', async () => {
    const user = [{
      id: 1,
      supabase_id: "123",
      email: "test@example.com",
    }];
    
    prismaMock.user.findMany.mockResolvedValue(user)

    await expect(getUsers()).resolves.toEqual([{
      id: 1,
      supabase_id: "123",
      email: "test@example.com",
    }]);
  });

});
