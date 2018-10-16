import React, { Component } from 'react'
import { ToastAndroid } from "react-native";
import { Container, Content, Form, Text, Label, Input, Button, Header, Title, Left, Icon, Body, Item } from "native-base";
import { NavigationActions, StackActions } from "react-navigation";
import { connect } from 'react-redux';
import { insertRemarks, addCheckList } from '../../action';

class Remarks extends Component {

    constructor(props){
        super(props)
        this.state = {
            remarks: ''
        }
    }

    handleSubmit = () => {
        this.props.insertRemarks(this.state.remarks)
        this.props.addCheckList()
        this.props.navigation.dispatch(StackActions.reset({
            index:0,
            actions:[ NavigationActions.navigate({routeName: 'Home'})]
        }))
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
                        <Input multiline={true} onChangeText={text => this.setState({remarks:text})}/>
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
mapStateToProps = state => {
    return {
        checklist: state.checkList.checklist
    }
}

export default connect(mapStateToProps,{insertRemarks, addCheckList})(Remarks)