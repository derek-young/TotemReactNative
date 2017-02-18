import React from 'react';
import { ScrollView, Text, TouchableHighlight, View } from 'react-native';
import rabbleStyles from './RabbleStyles';
import RabbleRow from './RabbleRow';
import SortRabble from './SortRabble';

const RabbleView = ({ userId, rabble, rabbleLoc, geoFences, sortRabble }) => (
  <View style={{ flex: 1 }}>
    <SortRabble sortRabble={sortRabble}/>
    {rabble.map((friend, index) => {
      //Anchor current user info at top of view
      if (friend.fb_id === userId) {
        return (
          <RabbleRow
            key={index}
            friend={friend}
            rabbleLoc={rabbleLoc}
            geoFences={geoFences}
          />
        );
      }
    })}
    <ScrollView>
      {rabble.map((friend, index) => {
        if (friend.fb_id !== userId) {
          return (
            <RabbleRow
              key={index}
              friend={friend}
              rabbleLoc={rabbleLoc}
              geoFences={geoFences}
            />
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

export default RabbleView;
