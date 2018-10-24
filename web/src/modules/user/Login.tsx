import * as React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { RouteComponentProps } from "react-router-dom";
import { LoginMutationVariables, LoginMutation } from "../../schemaTypes";
import { testQuery } from "../../graphql/queries/me";
import { userFragment } from "src/graphql/fragments/UserFragment";
import { Form } from "./Form";

const loginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ...UserInfo
    }
  }
  ${userFragment}
`;

export class Login extends React.PureComponent<RouteComponentProps<{}>> {
  render() {
    return (
      <Mutation<LoginMutation, LoginMutationVariables>
        update={(cache, { data }) => {
          if (!data || !data.login) {
            return;
          }

          cache.writeQuery({
            query: testQuery,
            data: { me: data.login }
          });
        }}
        mutation={loginMutation}
      >
        {(mutate, { client }) => (
          <Form
            buttonText="login"
            onSubmit={async data => {
              // optional reset cache
              await client.resetStore();
              const response = await mutate({
                variables: data
              });
              console.log(response);
              this.props.history.push("/account");
            }}
          />
        )}
      </Mutation>
    );
  }
}
