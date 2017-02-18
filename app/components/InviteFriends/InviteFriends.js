import React, { Component } from 'react'
import { View, Button } from 'react-native'
import SelectMultiple from 'react-native-select-multiple';

const friends = ['Apples', 'Oranges', 'Pears','ola']

 export default class InviteFriends extends Component {
  state = { selectedFriends: [] }

   constructor(props) {
    super(props);
    this.state = {
      selectedFriends: []
    };
  }
  onSelectionsChange = (selectedFriends) => {
    this.setState({ selectedFriends })
  }
  inviteFriends(changedText) {
  	console.log("changedText: ", this.state.selectedFriends);
  	this.setState({text: this.state.selectedFriends});

  }

  render () {
    return (
      <View>
        <SelectMultiple
          items={friends}
          selectedItems={this.state.selectedFriends}
          onSelectionsChange={this.onSelectionsChange}
        />
        <Button
         onPress={this.inviteFriends.bind(this)}
         title="Invite Friends"
        />
      </View>
    )
  }
}



