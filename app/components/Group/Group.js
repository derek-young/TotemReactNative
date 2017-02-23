import React from 'react';
import { ScrollView, View } from 'react-native';
//import UserRow from './UserRow';
import SortGroup from './SortGroup';
import store from '../../store';
import ButtonFull from '../common/ButtonFull';

const GroupView = ({ dispatch, users, userID }) => (
  <View style={{ flex: 1 }}>
    <SortGroup dispatch={dispatch}/>
    {Object.keys(users).map((userKey, index) => {
      //Anchor current user info at top of view
      const friend = users[userKey];
      if (userKey === userID) {
        return (
          <UserRow key={index} friend={friend} />
        );
      }
    })}
    <ScrollView>
      {Object.keys(users).map((userKey, index) => {
        const friend = users[userKey];
        if (userKey !== userID) {
          return (
            <UserRow key={index} friend={friend} />
          );
        }
      })}
    </ScrollView>
    <ButtonFull
      onPress={function(){console.log('add a friend')}}
      title='Add a Friend'
    />
  </View>
);

export default GroupView;
