import React, { Component } from 'react'
import { Image } from "react-native";
import { Fab, Container, Content, Header, Text, Left, Right, Body, Icon, Button, Title, Thumbnail, Card, CardItem } from "native-base";

import { selectAllCompany } from "../../database/database";

export default class Home extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      active: false,
      data:[]
    }
  }
  
  componentDidMount(){
    selectAllCompany().then((allCompany) => {
      this.setState({data:allCompany})
      console.log('success!')
    }).catch((error) => {
      this.setState({data:[]})
      console.log('error')
    })
  }
  
  render() {
    let company = this.state.data.map((company, index) => {
      return (
        <Card key={index}>
        <CardItem>
        <Left>
        <Thumbnail source={require('../images/logo.png')} />
        <Body>
        <Text>{company.companyName}</Text>
        <Text note>{company.companyOwner}</Text>
        </Body>
        </Left>
        </CardItem>
        <CardItem cardBody>
        <Image source={require('../images/logo.png')} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent onPress={() => { this.props.navigation.navigate('ShowCompany', {data:this.state.data[index]}) }}>
              <Icon active name="eye" />
              <Text>View</Text>
            </Button>
          </Left>
        <Body>
          <Button transparent style={{ width:130 }}>
        <Text>{company.companyAddress}</Text>
          </Button>
        </Body>
        <Right>
        <Text>11h ago</Text>
        </Right>
        </CardItem>
        </Card>
      )
    })
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
      {company.length === 0 ? <Text>No data available</Text> : company}
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
