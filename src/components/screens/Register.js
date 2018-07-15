import React, { Component } from 'react'
import { Container, Content, Header, Left, Body, Title, Text, Form, Icon, Item, Label, Input, Button } from "native-base";
import { insertNewCompany } from "../../database/database";
export class Register extends Component {
	constructor(props){
		super(props)
		this.state = {
			companyName:'',
			companyAddress:'',
			companyOwner:'',
			ownerContactNumber:'',
			data:{
				companyName:'',
				companyAddress:'',
				companyOwner:'',
				ownerContactNumber:'',
				id: 4
			}
		}
	}

	register = () => {
		console.log(this.state.data)
		insertNewCompany(this.state.data).then().catch((error) => console.log(error))
		this.props.navigation.navigate('CheckList')
	}

	render() {
		return (
			<Container style={{ backgroundColor:'white' }}>
				<Header>
          <Left>
            <Button transparent onPress={() => {this.props.navigation.goBack()}}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Register Company</Title>
          </Body>
        </Header>
				<Content style={{ margin:20 }}>
					<Form>
						<Item floatingLabel>
							<Label>Company Name</Label>
							<Input
								onChangeText={(text) => {this.setState({data: _.extend(this.state.data, {companyName:text})})} }
								/>
							<Icon style={{ color:'gray' }} active name='ios-medal-outline' />
						</Item>
						<Item floatingLabel>
							<Label>Address</Label>
							<Input 
								onChangeText={(text) => {this.setState({data: _.extend(this.state.data, {companyAddress:text})})} }
								/>
							<Icon style={{ color:'gray' }} active name='ios-home-outline' />
						</Item>
						<Item floatingLabel>
							<Label>Owner Name</Label>
							<Input 
								onChangeText={(text) => {this.setState({data: _.extend(this.state.data, {companyOwner:text})})} }
								/>
							<Icon style={{ color:'gray' }} active name='ios-contact-outline' />
						</Item>
						<Item floatingLabel>
							<Label>Contact Number</Label>
							<Input 
								onChangeText={(text) => {this.setState({data: _.extend(this.state.data, {ownerContactNumber:text})})} }
								/>
							<Icon style={{ color:'gray' }} active name='ios-phone-portrait-outline' />
						</Item>
					</Form>
				</Content>						
				<Button block onPress={this.register}>
					<Text>Submit</Text>
				<Icon active name='paper-plane' />
				</Button>
			</Container>
		)
	}
}

export default Register