import React from 'react';
import { ScrollView, Text, TouchableHighlight, View } from 'react-native';
import rabbleStyles from './RabbleStyles';
import RabbleRow from './RabbleRow';
import SortRabble from './SortRabble';
import store from '../../store';

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
      <TouchableHighlight onPress={function(){console.log('add a friend')}}>
        <View style={rabbleStyles.button}>
          <Text style={rabbleStyles.text}>Add a Friend</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

export default RabbleView;
