import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'
import SelectMultiple from 'react-native-select-multiple';

const friends = ['Apples', 'Oranges', 'Pears','ola',"a"]

 export default class InviteFriends extends Component {
  state = { selectedFriends: [] }

   constructor(props) {
    super(props);
    this.state = {
      selectedFriends: [],
      text:""
    };
  }
  onSelectionsChange = (selectedFriends) => {
    this.setState({ selectedFriends })
  }
  inviteFriends(changedText) {
  	console.log("changedText: ", this.state.selectedFriends);
  	this.setState({text: this.state.selectedFriends});

  }
  showFriendList(text) {
    console.log("i am here",text);
    var searchValue = this.state.text.toLowerCase();
    if(this.state.text === "")
      return friends;
    else {

      return friends.filter(function(item) {
        console.log("here item", item);
         if((item.toLowerCase()).indexOf(searchValue) !== -1){
            return item;
         }

      });

    }
    console.log("ola");


  }

  render () {
    return (
      <View>
      <TextInput
         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
         onChangeText={(text) => {this.setState({text}); this.showFriendList(text) }}
         value={this.state.text}
        />

        <SelectMultiple
          items={this.showFriendList("")}
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
