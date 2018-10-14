import { gql } from "apollo-boost";

export const testQuery = gql`
  query TestQuery {
    me {
      id
      email
      type
    }
  }
`;
