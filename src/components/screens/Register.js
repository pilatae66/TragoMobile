import React, { Component } from 'react'
import { Container, Content, Header, Left, Body, Title, Text, Form, Icon, Item, Label, Input, Button } from "native-base";
import { registerCompany } from '../../action'
import { connect } from 'react-redux'

class Register extends Component {
	constructor(props){
		super(props)
		this.state = {
			data:{
				companyName:'',
				companyAddress:'',
				companyOwner:'',
				ownerContactNumber:'',
				ownerSanitaryPermitNo:'',
				dateIssued:'',
				numberOfPersonnel:0,
				numberWithHealthCertificate:0
			}
		}
	}

	register = () => {
		console.log(this.state.data)
		this.props.registerCompany(this.state.data)
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
						<Item floatingLabel>
							<Label>Sanitary Permit No.</Label>
							<Input 
								onChangeText={(text) => {this.setState({data: _.extend(this.state.data, {ownerSanitaryPermitNo:text})})} }
								/>
							<Icon style={{ color:'gray' }} active name='ios-phone-portrait-outline' />
						</Item>
						<Item floatingLabel>
							<Label>Date Issued</Label>
							<Input 
								onChangeText={(text) => {this.setState({data: _.extend(this.state.data, {dateIssued:text})})} }
								/>
							<Icon style={{ color:'gray' }} active name='ios-phone-portrait-outline' />
						</Item>
						<Item floatingLabel>
							<Label>No. of Personnel</Label>
							<Input
							keyboardType = 'numeric'
								onChangeText={(text) => {this.setState({data: _.extend(this.state.data, {numberOfPersonnel:parseInt(text)})})} }
								/>
							<Icon style={{ color:'gray' }} active name='ios-phone-portrait-outline' />
						</Item>
						<Item floatingLabel>
							<Label>No. with Health Certificate</Label>
							<Input 
							
							keyboardType = 'numeric'
								onChangeText={(text) => {this.setState({data: _.extend(this.state.data, {numberWithHealthCertificate:parseInt(text)})})} }
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
mapStateToProps = state => {
	return {
		checklist: state.checkList.checklist
	}
}

export default connect(mapStateToProps, {registerCompany})(Register)