import React, { Component } from 'react'
import { Image } from "react-native";
import { Fab, Container, Content, Header, Text, Left, Right, Body, Icon, Button, Title, Thumbnail, Card, CardItem } from "native-base";

import Ionicons from "react-native-vector-icons/Ionicons";

export default class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      active: false
    }
  }
  

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button onPress={()=> {this.props.navigation.openDrawer();}} transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content style={{ margin:5 }}>
        <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../images/logo.png')} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../images/logo.png')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent style={{ width:125 }}>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
         
        </Content>
        <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="person" />
            <Button style={{ backgroundColor: '#34A34F' }} onPress={() => { this.props.navigation.navigate('Register') }}>
              <Icon name="ios-add" />
            </Button>
          </Fab>
      </Container>
    )
  }
}
