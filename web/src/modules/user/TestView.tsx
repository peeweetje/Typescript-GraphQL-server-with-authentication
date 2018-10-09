import * as React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { TestQuery } from "../../schemaTypes";

const testQuery = gql`
  query TestQuery {
    me {
      id
      email
    }
  }
`;

export default class TestView extends React.PureComponent {
  render() {
    return (
      <Query<TestQuery> query={testQuery}>
        {({ data, loading }) => {
          if (loading) {
            return null;
          }
          if (!data) {
            return <div>data is undefined</div>;
          }
          if (!data.me) {
            return <div>user not available</div>;
          }
          return <div>{data.me.email}</div>;
        }}
      </Query>
    );
  }
}
