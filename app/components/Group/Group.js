import React from 'react';
import { ScrollView, View } from 'react-native';
import GroupRow from './GroupRow';
import SortGroup from './SortGroup';
import store from '../../store';
import ButtonFull from '../common/ButtonFull';

const GroupView = ({ dispatch }) => {
  const group = store.getState().app.group;
  const userId = store.getState().app.userFbId;

  return (
    <View style={{ flex: 1 }}>
      <SortGroup dispatch={dispatch}/>
      {group.map((friend, index) => {
        //Anchor current user info at top of view
        if (friend.fb_id === userId) {
          return (
            <GroupRow key={index} friend={friend} />
          );
        }
      })}
      <ScrollView>
        {group.map((friend, index) => {
          if (friend.fb_id !== userId) {
            return (
              <GroupRow key={index} friend={friend} />
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
}

export default GroupView;
