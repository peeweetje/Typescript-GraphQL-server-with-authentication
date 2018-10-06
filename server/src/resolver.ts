import { IResolvers } from "graphql-tools";
import { User } from "./entity/User";
import * as bcrypt from "bcryptjs";

export const resolvers: IResolvers = {
  Query: {
    hello: () => "hi"
  },
  Mutation: {
    register: async (_, { email, password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      await User.create({
        email,
        password: hashedPassword
      }).save();

      return true;
    }
  }
};
