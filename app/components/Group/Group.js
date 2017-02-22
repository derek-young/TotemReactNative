import React from 'react';
import { ScrollView, View } from 'react-native';
import UserRow from './UserRow';
import SortGroup from './SortGroup';
import store from '../../store';
import ButtonFull from '../common/ButtonFull';

const GroupView = ({ dispatch, users, userId }) => (
  <View style={{ flex: 1 }}>
    <SortGroup dispatch={dispatch}/>
    {users.map((friend, index) => {
      //Anchor current user info at top of view
      if (friend.fb_id === userId) {
        return (
          <UserRow key={index} friend={friend} />
        );
      }
    })}
    <ScrollView>
      {users.map((friend, index) => {
        if (friend.fb_id !== userId) {
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
