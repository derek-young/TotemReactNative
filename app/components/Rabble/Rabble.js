import React from 'react';
import { ScrollView, View } from 'react-native';
import RabbleRow from './RabbleRow';
import SortRabble from './SortRabble';
import store from '../../store';
import ButtonFull from '../common/ButtonFull';

const RabbleView = ({ dispatch }) => {
  const rabble = store.getState().rabble.rabble;
  const userId = store.getState().app.userFbId;

  return (
    <View style={{ flex: 1 }}>
      <SortRabble dispatch={dispatch}/>
      {rabble.map((friend, index) => {
        //Anchor current user info at top of view
        if (friend.fb_id === userId) {
          return (
            <RabbleRow key={index} friend={friend} />
          );
        }
      })}
      <ScrollView>
        {rabble.map((friend, index) => {
          if (friend.fb_id !== userId) {
            return (
              <RabbleRow key={index} friend={friend} />
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

export default RabbleView;
