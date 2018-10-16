import React, { Component } from 'react'
import { Container, Content, Header, ListItem, CheckBox, Body, Text, Left, Button, Icon, Title, Input } from "native-base";
import { connect } from 'react-redux'
import { insertCheckList, insertRating } from '../../action'

class CheckList extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: {
        q1: false,
        q2: false,
        q3: false,
        q4: false,
        q5: false,
        q6: false,
        q7: false,
        q8: false,
        q9: false,
        q10: false,
        q11: false,
        q12: false,
        q13: false,
        q14: false,
        q15: false,
        q16: false,
        q17: false,
        q18: false,
        q19: false,
        q20: false,
      }
    }
  }

  handleSubmit = () => {
    let count = 0
    Object.values(this.state.data).map((value) => {
      console.log(value)
      if (value == true) {
        count++;
      }
    })
    count = 100 - (count*5)
    this.props.insertCheckList(this.state.data)
    this.props.insertRating(count)
    this.props.navigation.navigate('Remarks')
  }

  render() {
    console.log(this.state.data.q1)
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => {this.props.navigation.goBack()}}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Sanitary Checklist</Title>
          </Body>
        </Header>
        <Content>
            <ListItem>
              <CheckBox checked={this.state.data.q1} onPress={() => {this.setState(prevState => ({...prevState,data:{...prevState.data, q1:!this.state.data.q1}}))}} color="green"/>
              <Body>
                <Text>Location</Text>
              </Body>
          </ListItem>
            <ListItem>
              <CheckBox checked={this.state.data.q2} onPress={() => {this.setState(prevState => ({...prevState,data:{...prevState.data, q2:!this.state.data.q2}}))}} color="green"/>
              <Body>
                <Text>Building/Premises Construction</Text>
              </Body>
          </ListItem>
            <ListItem>
              <CheckBox checked={this.state.data.q3} onPress={() => {this.setState(prevState => ({...prevState,data:{...prevState.data, q3:!this.state.data.q3}}))}} color="green"/>
              <Body>
                <Text>Lighting and Ventilation</Text>
              </Body>
          </ListItem>
            <ListItem>
              <CheckBox checked={this.state.data.q4} onPress={() => {this.setState(prevState => ({...prevState,data:{...prevState.data, q4:!this.state.data.q4}}))}} color="green"/>
              <Body>
                <Text>Sectioning</Text>
              </Body>
          </ListItem>
            <ListItem>
              <CheckBox checked={this.state.data.q5} onPress={() => {this.setState(prevState => ({...prevState,data:{...prevState.data, q5:!this.state.data.q5}}))}} color="green"/>
              <Body>
                <Text>Packaged Food</Text>
              </Body>
          </ListItem>
            <ListItem>
              <CheckBox checked={this.state.data.q6} onPress={() => {this.setState(prevState => ({...prevState,data:{...prevState.data, q6:!this.state.data.q6}}))}} color="green"/>
              <Body>
                <Text>Refrigerated Food</Text>
              </Body>
          </ListItem>
            <ListItem>
              <CheckBox checked={this.state.data.q7} onPress={() => {this.setState(prevState => ({...prevState,data:{...prevState.data, q7:!this.state.data.q7}}))}} color="green"/>
              <Body>
                <Text>Medicines And other Pharmaceutical Products</Text>
              </Body>
          </ListItem>
            <ListItem>
              <CheckBox checked={this.state.data.q8} onPress={() => {this.setState(prevState => ({...prevState,data:{...prevState.data, q8:!this.state.data.q8}}))}} color="green"/>
              <Body>
                <Text>Insecticides and Chemicals</Text>
              </Body>
          </ListItem>
            <ListItem>
              <CheckBox checked={this.state.data.q9} onPress={() => {this.setState(prevState => ({...prevState,data:{...prevState.data, q9:!this.state.data.q9}}))}} color="green"/>
              <Body>
                <Text>Toys, Clothing, And other Merchandise</Text>
              </Body>
          </ListItem>
            <ListItem>
              <CheckBox checked={this.state.data.q10} onPress={() => {this.setState(prevState => ({...prevState,data:{...prevState.data, q10:!this.state.data.q10}}))}} color="green"/>
              <Body>
                <Text>Pushcarts and Baskets, Cashier Counter and Promotional Sales</Text>
              </Body>
          </ListItem>
            <ListItem>
              <CheckBox checked={this.state.data.q11} onPress={() => {this.setState(prevState => ({...prevState,data:{...prevState.data, q11:!this.state.data.q11}}))}} color="green"/>
              <Body>
                <Text>Storage Area</Text>
              </Body>
          </ListItem>
            <ListItem>
              <CheckBox checked={this.state.data.q12} onPress={() => {this.setState(prevState => ({...prevState,data:{...prevState.data, q12:!this.state.data.q12}}))}} color="green"/>
              <Body>
                <Text>Loading and Unloading Area</Text>
              </Body>
          </ListItem>
            <ListItem>
              <CheckBox checked={this.state.data.q13} onPress={() => {this.setState(prevState => ({...prevState,data:{...prevState.data, q13:!this.state.data.q13}}))}} color="green"/>
              <Body>
                <Text>Delivery Transport Vehicles</Text>
              </Body>
          </ListItem>
            <ListItem>
              <CheckBox checked={this.state.data.q14} onPress={() => {this.setState(prevState => ({...prevState,data:{...prevState.data, q14:!this.state.data.q14}}))}} color="green"/>
              <Body>
                <Text>Water Supply</Text>
              </Body>
          </ListItem>
            <ListItem>
              <CheckBox checked={this.state.data.q15} onPress={() => {this.setState(prevState => ({...prevState,data:{...prevState.data, q15:!this.state.data.q15}}))}} color="green"/>
              <Body>
                <Text>Toilet and Handwashing Facilities</Text>
              </Body>
          </ListItem>
            <ListItem>
              <CheckBox checked={this.state.data.q16} onPress={() => {this.setState(prevState => ({...prevState,data:{...prevState.data, q16:!this.state.data.q16}}))}} color="green"/>
              <Body>
                <Text>Liquid Waste Management</Text>
              </Body>
          </ListItem>
            <ListItem>
              <CheckBox checked={this.state.data.q17} onPress={() => {this.setState(prevState => ({...prevState,data:{...prevState.data, q17:!this.state.data.q17}}))}} color="green"/>
              <Body>
                <Text>Solid Waste Management</Text>
              </Body>
          </ListItem>
            <ListItem>
              <CheckBox checked={this.state.data.q18} onPress={() => {this.setState(prevState => ({...prevState,data:{...prevState.data, q18:!this.state.data.q18}}))}} color="green"/>
              <Body>
                <Text>Vermin Control</Text>
              </Body>
          </ListItem>
            <ListItem>
              <CheckBox checked={this.state.data.q19} onPress={() => {this.setState(prevState => ({...prevState,data:{...prevState.data, q19:!this.state.data.q19}}))}} color="green"/>
              <Body>
                <Text>Personnel</Text>
              </Body>
          </ListItem>
            <ListItem>
              <CheckBox checked={this.state.data.q20} onPress={() => {this.setState(prevState => ({...prevState,data:{...prevState.data, q20:!this.state.data.q20}}))}} color="green"/>
              <Body>
                <Text>Miscellaneous</Text>
              </Body>
          </ListItem>
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
export default connect(mapStateToProps, {insertCheckList,insertRating})(CheckList)