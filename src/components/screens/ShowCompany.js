import React, { Component } from 'react'
import { Image, ToastAndroid } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
import { Container, Content, Card, CardItem, Left, Right, Body, Button, Thumbnail, Icon, Text, Header, Title } from "native-base";
import { deleteCompany } from "../../database/database";

class ShowCompany extends Component {
	constructor(props){
		super(props)
		this.state = {
			company:{
				id: 0
			}
		}
	}

	handleSubmit = () => {
		let company = this.props.navigation.getParam('data')
		deleteCompany(company).then(() => {
			this.props.navigation.dispatch(StackActions.reset({
				index:0,
				actions:[ NavigationActions.navigate({routeName: 'Home'}) ]
			}))
			ToastAndroid.show('Record Deleted', ToastAndroid.SHORT)
		}).catch((error) => console.log(error))
	}

	render() {

		let company = this.props.navigation.getParam('data', [])

		return (
			<Container>
			<Header>
          <Left>
            <Button transparent onPress={() => {this.props.navigation.goBack()}}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>{company.companyName}</Title>
          </Body>
		  <Right/>
        </Header>
			<Content style={{ margin:5 }}>
			<Card>
			<CardItem>
			<Left>
			<Thumbnail source={require('../images/logo.png')} />
			<Body>
			<Text>{company.companyName}</Text>
			<Text note>Test</Text>
			</Body>
			</Left>
			</CardItem>
			<CardItem cardBody>
			<Image source={require('../images/logo.png')} style={{height: 200, width: null, flex: 1, resizeMode:'contain'}}/>
			</CardItem>
			<CardItem>
			<Left>
			<Button transparent>
			<Icon active name="thumbs-up" />
			<Text>12 Likes</Text>
			</Button>
			</Left>
			<Body>
			<Button transparent danger onPress={this.handleSubmit}>
			<Icon active name="trash" />
			<Text>Delete</Text>
			</Button>
			</Body>
			<Right>
			<Text>{company.dateIssued.toLocaleDateString()}</Text>
			</Right>
			</CardItem>
			</Card>
			</Content>
			</Container>
		)
	}
}

export default ShowCompany