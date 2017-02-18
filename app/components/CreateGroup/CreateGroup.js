import React, { Component } from 'react';
import { Text, View, TextInput, Button, Navigator } from 'react-native';


export default class CreateGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  createGroupName(changedText) {
  	console.log("changedText: ", this.state.text);
  	this.setState({text: this.state.text});

  }

  render() {
    return (
      <View>
        <Text>Test CreateGroup View</Text>
        <TextInput
         style={{height: 40, borderColor: 'gray', borderWidth: 1}} 
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
        />
          <Button
            onPress={this.createGroupName.bind(this)}
            title="Create Group"
          />
      </View>
    );
  }
}


      