import React from 'react';
import { ScrollView, Text, TouchableHighlight, View } from 'react-native';
import rabbleStyles from './RabbleStyles';
import RabbleRow from './RabbleRow';
import SortRabble from './SortRabble';

const RabbleView = ({ user_id, rabble, rabble_loc, geo_fences, sortRabble }) => (
  <View style={{ flex: 1 }}>
    <SortRabble sortRabble={sortRabble}/>
    {rabble.map((friend, index) => {
      //Anchor current user info at top of view
      if (friend.fb_id === user_id) {
        return (
          <RabbleRow
            key={index}
            friend={friend}
            rabble_loc={rabble_loc}
            geo_fences={geo_fences}
          />
        );
      }
    })}
    <ScrollView>
      {rabble.map((friend, index) => {
        if (friend.fb_id !== user_id) {
          console.log(index + ': ', friend.name)
          return (
            <RabbleRow
              key={index}
              friend={friend}
              rabble_loc={rabble_loc}
              geo_fences={geo_fences}
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
