import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import ButtonFull from '../common/ButtonFull';
import styles from '../../styles';
import store from '../../store';
import api from '../../apiHelpers';
import firebase from '../../firebase';
import Dimensions from 'Dimensions'

export default class CreateGroup extends Component {
  
  createGroup() {
    const url = store.getState().app.api_url;
    const userFbId = store.getState().app.userFbId;
    const groupName = this.state.text;

    if (groupName !== '') {
      const db = firebase.database();
      const groupKey = db.ref().child('groups').push().key;
      const updates = {};

      updates['/groups/' + groupKey] = {
        name: 'Ballers'
      };

      db.ref().update(updates);

    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.main}>
          <Text style={styles.textMed}>
            Please enter a group name
          </Text>
          <View style={{ marginTop: 10 }}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
          </View>
        </View>
        <ButtonFull
          onPress={this.createGroup.bind(this)}
          title='Create Group'
        />
      </View>
    );
  }
}
