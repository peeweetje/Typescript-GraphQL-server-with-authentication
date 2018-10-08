import * as React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { RouteComponentProps } from "react-router-dom";
import { RegisterMutationVariables, RegisterMutation } from "../../schemaTypes";

const registerMutation = gql`
  mutation RegisterMutation($email: String!, $password: String!) {
    register(email: $email, password: $password)
  }
`;

export class Register extends React.PureComponent<RouteComponentProps<{}>> {
  state = {
    email: "",
    password: ""
  };

  handleChange = (e: any) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    const { password, email } = this.state;
    return (
      <Mutation<RegisterMutation, RegisterMutationVariables>
        mutation={registerMutation}
      >
        {mutate => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div>
              <input
                type="text"
                placeholder="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <button
              onClick={async () => {
                const response = await mutate({
                  variables: this.state
                });
                console.log(response);
                this.props.history.push("/login");
              }}
            >
              register
            </button>
          </div>
        )}
      </Mutation>
    );
  }
}
