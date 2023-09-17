import { prismaMock } from "../../singleton";
import { createUser } from "../../src/user/userModel";

describe('User Model - createUser', () => {
  it('should create a new user', async () => {
    const user = {
      id: 1,
      supabase_id: "123",
      email: "test@example.com",
    };
    
    prismaMock.user.create.mockResolvedValue(user);

    await expect(createUser(user)).resolves.toEqual({
      id: 1,
      supabase_id: "123",
      email: "test@example.com",
    });

    // prismaMock.user.create.mockImplementation()
  });
})
