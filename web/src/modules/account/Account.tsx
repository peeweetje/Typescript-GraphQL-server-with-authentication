import * as React from "react";
import { Query } from "react-apollo";
import { Redirect } from "react-router-dom";
import { TestQuery } from "../../schemaTypes";
import SubscribeUser from "./SubscribeUser";
import { testQuery } from "src/graphql/queries/me";

export default class Account extends React.PureComponent {
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
            return <Redirect to="/login" />;
          }

          if (data.me.type === "free-trial") {
            return <SubscribeUser />;
          }
          console.log(data.me);
          // if (data.me.type === 'standard paid')
          return <div>Thank you for purchasing our product</div>;
        }}
      </Query>
    );
  }
}
