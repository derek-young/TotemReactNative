import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import ButtonFull from '../common/ButtonFull';
import styles from '../../styles';
import store from '../../store';
import api from '../../apiHelpers';

export default class CreateGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  createGroup() {
    const url = store.getState().app.api_url;
    const userFbId = store.getState().app.userFbId;
    const groupName = this.state.text;

    if (groupName !== '') {
      api.post(url + '/api/group', JSON.stringify({
        userId: userFbId,
        groupName: groupName
      }))
      .then((groupId) => {
        console.log(groupId);
      });
    }
  }

  render() {
    return (
      <View>
        <Text>Please enter a group name</Text>
        <TextInput
         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
        />
        <ButtonFull
          onPress={this.createGroup.bind(this)}
          title='Create Group'
        />
      </View>
    );
  }
}
