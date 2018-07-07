import React, { Component } from 'react'
import { ToastAndroid } from "react-native";
import { Container, Content, Form, Text, Label, Input, Button, Header, Title, Left, Icon, Body, Item } from "native-base";

export class Remarks extends Component {

    handleSubmit = () => {
        this.props.navigation.navigate('Home')
        ToastAndroid.show('Checklist Submitted!', ToastAndroid.SHORT)
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
                        <Title>Remarks</Title>
                    </Body>
                </Header>
                <Content padder>
                    <Form>
                    <Item stackedLabel>
                        <Label>Please enter remarks</Label>
                        <Input multiline={true} />
                    </Item>
                    </Form>
                </Content>
                <Button block onPress={this.handleSubmit}>
                    <Text>Submit</Text>
                </Button>
            </Container>
        )
    }
}

export default Remarks