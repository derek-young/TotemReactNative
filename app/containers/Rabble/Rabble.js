import React from 'react';
import { Button, Image, ScrollView, Text, TouchableHighlight, View } from 'react-native';
import styles from '../../styles';
import rabbleStyles from './RabbleStyles';

const RabbleView = ({ rabble, rabble_loc }) => (
  <View style={{ flex: 1 }}>
    <ScrollView>
      {rabble.map((friend) => (
        <View key={friend.fb_id}>
          <View style={rabbleStyles.main}>
            <Image style={rabbleStyles.profile_img} source={{ uri: friend.img }}/>
            <View>
              <Text style={rabbleStyles.text}>{friend.name}</Text>
              <Text style={rabbleStyles.subtext}>{`lat: ${rabble_loc[friend.fb_id].lat}, long: ${rabble_loc[friend.fb_id].long}`}</Text>
            </View>
          </View>
          <View style={styles.thinLine} />
        </View>
      ))}
    </ScrollView>
    <TouchableHighlight onPress={function(){console.log('add a friend')}}>
      <View style={rabbleStyles.button}>
        <Text style={rabbleStyles.text}>Add a Friend</Text>
      </View>
    </TouchableHighlight>
  </View>
);

export default RabbleView;
