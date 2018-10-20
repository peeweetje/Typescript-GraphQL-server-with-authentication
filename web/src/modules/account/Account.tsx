import * as React from "react";
import { Query } from "react-apollo";
import { Redirect } from "react-router-dom";
import { TestQuery } from "../../schemaTypes";
import SubscribeUser from "./SubscribeUser";
import { testQuery } from "src/graphql/queries/me";
import { ChangeCreditCard } from "./ChangeCreditCard";
import CancelSubscription from "./CancelSubscription";

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
          return (
            <div>
              <div>
                Your current last 4 digits of your creditcard: {data.me.ccLast4}
              </div>
              <ChangeCreditCard />
              <CancelSubscription />
            </div>
          );
        }}
      </Query>
    );
  }
}
