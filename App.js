import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Footer } from 'native-base';
export default class FloatingLabelExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content style={{ marginHorizontal:20, backgroundColor:'white' }}>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
          <Button block><Text>Register</Text></Button>
      </Container>
    );
  }
}