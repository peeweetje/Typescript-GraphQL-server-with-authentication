import { gql } from "apollo-boost";
import { userFragment } from "../fragments/UserFragment";

export const testQuery = gql`
  query TestQuery {
    me {
      ...UserInfo
    }
  }
  ${userFragment}
`;
