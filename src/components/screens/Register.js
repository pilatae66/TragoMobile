import React, { Component } from 'react'
import { Container, Content, Header, Left, Body, Title, Text, Form, Icon, Item, Label, Input, Button } from "native-base";

export class Register extends Component {
	constructor(props){
		super(props)
		this.state = {
			companyName:'',
			address:'',
			ownerName:'',
			contactNumber:'',
			data:{
				companyName:'',
				address:'',
				ownerName:'',
				contactNumber:''
			}
		}
	}

	register = () => {
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
								onChangeText={(text) => {this.setState({companyName:text})} }
								/>
							<Icon style={{ color:'gray' }} active name='ios-medal-outline' />
						</Item>
						<Item floatingLabel>
							<Label>Address</Label>
							<Input 
								onChangeText={(text) => {this.setState({address:text})} }
								/>
							<Icon style={{ color:'gray' }} active name='ios-home-outline' />
						</Item>
						<Item floatingLabel>
							<Label>Owner Name</Label>
							<Input 
								onChangeText={(text) => {this.setState({ownerName:text})} }
								/>
							<Icon style={{ color:'gray' }} active name='ios-contact-outline' />
						</Item>
						<Item floatingLabel>
							<Label>Contact Number</Label>
							<Input 
								onChangeText={(text) => {this.setState({contactNumber:text})} }
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