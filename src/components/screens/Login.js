import React, { Component } from 'react'
import { Image, StatusBar, ToastAndroid } from "react-native";
import { NavigationActions, StackActions } from "react-navigation";
import { Container, Content, Form, Item, Label, Input, Icon, Text,Button } from "native-base";
import firebase from 'react-native-firebase'

export class Login extends Component {
	constructor(props){
		super(props)
		this.state = {
			email: '',
			password: '',
			login: {
				email: 'admin',
				password: 'admin'
			},
			loading: false
		}
	}

	login = () => {
		const { email, password } = this.state
		this.setState({loading:!this.state.loading})
		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(() => {
			ToastAndroid.show('You are logged in!', ToastAndroid.SHORT)
			this.props.navigation.dispatch(StackActions.reset({
				index:0,
				actions:[ NavigationActions.navigate({routeName: 'Home'}) ]
			}))
		})
		.catch(err => ToastAndroid.show(err.message, ToastAndroid.SHORT))
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
					style={{ flex:1, marginTop:80, marginBottom:20 }}
					height={150}
					width={null}
					resizeMode='contain'
        />
        <Text style={{ textAlign:'center', fontSize:24, marginBottom:100 }}>Sanitary Checklist System</Text>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
							<Input 
								onChangeText={(text) => {this.setState({email:text})} }
								/>
            <Icon style={{ color:'gray' }} active name='ios-contact-outline' />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
							<Input 
								secureTextEntry={true}
								onChangeText={(text) => {this.setState({password:text})} }
							/>
            <Icon style={{ color:'gray' }} active name='ios-lock-outline' />
            </Item>
          </Form>
        </Content>						
				<Button iconRight loading={this.state.loading} block onPress={this.login}>
					<Text>Submit</Text>
          <Icon name='ios-paper-plane-outline' />
				</Button>
      </Container>
    )
  }
}

export default Login