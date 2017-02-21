import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert, Button, ScrollView, Text, TextInput, View } from 'react-native';
import Venue from './Venue';
import styles from '../../styles';
import localStyles from './ChooseVenueStyles';
import { updateText, selectVenue } from '../../actions/venueActions';

class ChooseVenue extends Component {
  select(id, name) {
    Alert.alert(
      'Confirm Selection:',
      name,
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'OK', onPress: () => {
          this.props.dispatch(selectVenue(id));
          this.props.push('/create');
        }},
      ],
    );
  }

  render() {
    console.log(this.props);
    return (
      <View style={localStyles.main}>
        <Text style={styles.h2}>Choose a Venue</Text>
        <View style={localStyles.section}>
          <TextInput
            style={localStyles.input}
            onChangeText={(text) => this.props.dispatch(updateText(text))}
            value={this.props.text}
            placeholder="Search"
          />
        </View>
        <ScrollView>
          {/* Need to sort venues by proximity to user and display in that order*/}
          {this.props.venues.map((venue, index) => {
            const searchValue = this.props.text.toLowerCase();

            if(searchValue.length === 0) {
              return (
                <Venue key={index} venue={venue} select={this.select.bind(this)}/>
              );
            }
            if(venue.name.toLowerCase().indexOf(searchValue) >= 0) {
              return (
                <Venue key={index} venue={venue} select={this.select.bind(this)}/>
              );
            }
          })}
        </ScrollView>
        <View style={{ marginBottom: 10 }}>
          <Button
            style={localStyles.fixedBottom}
            title="Skip"
            color="lightgrey"
            onPress={() => this.props.push('/create')}
          />
        </View>
      </View>
    );
  }
}

export default connect((store) => {
  return {
    venues: store.venues.venues,
    text: store.venues.text
  };
})(ChooseVenue);
