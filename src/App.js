import React, { Component } from "react";
import { Grid, Form, Input, Button } from "semantic-ui-react";

import "semantic-ui-css/semantic.css";

class App extends Component {
  render() {
    return (
      <Grid columns={1} textAlign="center" className="App">
        <Grid.Column width="6">
          <Grid
            columns={2}
            verticalAlign="middle"
            relaxed="very"
            divided
            stackable
          >
            <Grid.Column textAlign="center">
              <Button
                icon="signup"
                color="green"
                size="big"
                content="Sign Up"
                labelPosition="left"
              />
            </Grid.Column>
            <Grid.Column textAlign="left">
              <Form>
                <Form.Field>
                  <label>Username</label>
                  <Input
                    icon="user"
                    placeholder="Username"
                    iconPosition="left"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <Input icon="lock" type="password" iconPosition="left" />
                </Form.Field>
                <Button type="submit" color="blue">
                  Login
                </Button>
              </Form>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    );
  }
}

export default App;
