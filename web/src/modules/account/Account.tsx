import * as React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Redirect } from "react-router-dom";
import { TestQuery } from "../../schemaTypes";
import SubscribeUser from "./SubscribeUser";

const testQuery = gql`
  query TestQuery {
    me {
      id
      email
      type
    }
  }
`;

export default class Account extends React.PureComponent {
  render() {
    return (
      <Query<TestQuery> fetchPolicy="network-only" query={testQuery}>
        {({ data, loading }) => {
          if (loading) {
            return null;
          }
          if (!data) {
            return <div>data is undefined</div>;
          }
          if (!data.me) {
            return <Redirect to="/login" />;
          }

          if (data.me.type === "free-trial") {
            return <SubscribeUser />;
          }
          // if (data.me.type === 'paid)
          return <div>Thank you for purchasing our product</div>;
        }}
      </Query>
    );
  }
}
