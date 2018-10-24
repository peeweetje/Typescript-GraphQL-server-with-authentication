import * as React from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import { TestQuery } from "src/schemaTypes";
import { testQuery } from "src/graphql/queries/me";
import { HeaderButton } from "src/styling/HeaderButton";

export default class Header extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          height: 50,
          width: "100%",
          backgroundColor: "rgb(255, 254, 252)",
          display: "flex",
          justifyContent: "space-around",
          padding: 10,
          alignItems: "center"
        }}
      >
        <Link to="/">
          <HeaderButton style={{ fontSize: 24 }}>Stripe Example</HeaderButton>
        </Link>
        <Query<TestQuery> query={testQuery}>
          {({ data, loading }) => {
            if (loading || !data) {
              return null;
            }

            if (!data.me) {
              return (
                <div>
                  <Link to="/login">
                    {" "}
                    <HeaderButton>login</HeaderButton>
                  </Link>

                  <Link to="/register">
                    {" "}
                    <HeaderButton>register</HeaderButton>
                  </Link>
                </div>
              );
            }
            // user is logged in
            return (
              <div>
                <Link to="/account">account</Link>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}
