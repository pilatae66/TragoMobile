import React, { Component } from 'react'
import { Image, StatusBar, ToastAndroid } from "react-native";
import { Container, Content, Form, Item, Label, Input, Icon, Text, Button, Footer } from "native-base";

export class Login extends Component {
	constructor(props){
		super(props)
		this.state = {
			username: '',
			password: '',
			login: {
				username: 'admin',
				password: 'admin'
			}
		}
	}

	login = () => {
		if(this.state.username === this.state.login.username && this.state.login.password){
			ToastAndroid.show('You are logged in!', ToastAndroid.SHORT);
			this.props.navigation.navigate('Home')
		}
	}

  render() {
    return ( 
    <Container style={{ backgroundColor:'white' }}>
				<StatusBar 
					backgroundColor='white'
					barStyle='dark-content'
				/>
        <Content ref={c => this._content = c} padder>
				<Image 
					source={require('../images/logo.png')}
					style={{ flex:1, marginTop:80 }}
					height={200}
					width={null}
					resizeMode='cover'
        />
        <Text style={{ textAlign:'center', fontSize:24, marginBottom:100 }}>Sanitary Checklist System</Text>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
							<Input 
								onChangeText={(text) => {this.setState({username:text})} }
								/>
            <Icon style={{ color:'gray' }} active name='ios-contact-outline' />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
							<Input 
							password
								onChangeText={(text) => {this.setState({password:text})} }
							/>
            <Icon style={{ color:'gray' }} active name='ios-lock-outline' />
            </Item>
          </Form>
        </Content>						
				<Button iconRight block onPress={this.login}>
					<Text>Submit</Text>
          <Icon name='ios-paper-plane-outline' />
				</Button>
      </Container>
    )
  }
}

export default Login