import React, { Component } from 'react'
import { Image } from "react-native";
import { Fab, Container, Content, Header, Text, Left, Right, Body, Icon, Button, Title, Thumbnail, Card, CardItem } from "native-base";

import { getCheckList } from '../../action'
import { connect } from "react-redux"

class Home extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      active: false
    }
  }
  
  componentDidMount(){
    this.props.getCheckList
  }
  
  render() {
    console.log(this.props)
    let company = this.props.checklist.map((company, index) => {
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
            <Button transparent onPress={() => { this.props.navigation.navigate('ShowCompany', {data:this.props.checklist[index]}) }}>
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
        <Text>{company.dateIssued.toLocaleDateString()}</Text>
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
mapStateToProps = state => {
  return {
    checklist: state.checkList.checklist
  }
}

export default connect(mapStateToProps, { getCheckList })(Home)
