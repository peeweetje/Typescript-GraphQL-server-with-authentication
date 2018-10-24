import * as React from "react";
import { gql } from "apollo-boost";
import { userFragment } from "src/graphql/fragments/UserFragment";
import { Mutation } from "react-apollo";
import { CancelSubscriptionMutation } from "../../schemaTypes";

const cancelSubscriptionMutation = gql`
  mutation CancelSubscriptionMutation {
    cancelSubscription {
      ...UserInfo
    }
  }

  ${userFragment}
`;

export class CancelSubscription extends React.PureComponent {
  render() {
    return (
      <Mutation<CancelSubscriptionMutation>
        mutation={cancelSubscriptionMutation}
      >
        {mutate => (
          <button onClick={() => mutate()}> cancel subscription </button>
        )}
      </Mutation>
    );
  }
}
