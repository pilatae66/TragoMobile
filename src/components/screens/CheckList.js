import React, { Component } from 'react'
import { Container, Content, Header, ListItem, CheckBox, Body, Text, Left, Button, Icon, Title, Input } from "native-base";

export class CheckList extends Component {
  constructor(props){
    super(props)
    this.state = {
      micro: false,
      compatible: false,
      accessible: false,
      collection: false,
      sealed: false,
      niches: false,
    }
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => {this.props.navigation.goBack()}}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Sanitary Checklist</Title>
          </Body>
        </Header>
        <Content>
            <ListItem>
              <CheckBox checked={this.state.micro} onPress={() => {this.setState({micro:!this.state.micro})}} color="green"/>
              <Body>
                <Text>Cleanable to Microbial Level</Text>
              </Body>
          </ListItem>
            <ListItem>
              <CheckBox checked={this.state.compatible} onPress={() => {this.setState({compatible:!this.state.compatible})}} color="green"/>
              <Body>
                <Text>Made of Compatible Material</Text>
              </Body>
          </ListItem>
            <ListItem>
              <CheckBox checked={this.state.accessible} onPress={() => {this.setState({accessible:!this.state.accessible})}} color="green"/>
              <Body>
                <Text>Accessible for Inspection, Maintenance, Cleaning and Sanitation</Text>
              </Body>
          </ListItem>
            <ListItem>
              <CheckBox checked={this.state.collection} onPress={() => {this.setState({collection:!this.state.collection})}} color="green"/>
              <Body>
                <Text>No Product or Liquid Collection</Text>
              </Body>
          </ListItem>
            <ListItem>
              <CheckBox checked={this.state.sealed} onPress={() => {this.setState({sealed:!this.state.sealed})}} color="green"/>
              <Body>
                <Text>Hollow Areas Should be Sealed</Text>
              </Body>
          </ListItem>
            <ListItem>
              <CheckBox checked={this.state.niches} onPress={() => {this.setState({niches:!this.state.niches})}} color="green"/>
              <Body>
                <Text>No Niches</Text>
              </Body>
          </ListItem>
        </Content>
        <Button block onPress={() => {this.props.navigation.navigate('Remarks')}}>
          <Text>Submit</Text>
        </Button>
      </Container>
    )
  }
}

export default CheckList