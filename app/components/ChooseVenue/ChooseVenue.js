import React, { Component } from 'react';
import { Button, ScrollView, Text, TextInput, View } from 'react-native';
import Venue from './Venue';
import styles from '../../styles';
import localStyles from './ChooseVenueStyles';

export default class ChooseVenue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      venues: [
        { id: 'osl123',
          name: 'Outside Lands Music and Art Festival',
          address: {
            line1: 'Golden Gate Park',
            line2: '',
            line3: '',
            city: 'San Francisco',
            state: 'CA',
            zip: '94122',
            country: 'USA'
          }
        },
        { id: 'coach123',
          name: 'Coachella Valley Music and Arts Festival',
          address: {
            line1: 'Empire Polo Club',
            line2: '81-800 Avenue 51',
            line3: '',
            city: 'Indio',
            state: 'CA',
            zip: '92201',
            country: 'USA'
          }
        }
      ]
    };
  }

  selectVenue(item) {
    console.log(item)
  }

  skip() {

  }

  render() {
    return (
      <View style={localStyles.main}>
        <Text style={styles.h2}>Choose a Venue</Text>
        <View style={localStyles.section}>
          <TextInput
            style={localStyles.input}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
            placeholder="Search"
          />
        </View>
        <ScrollView>
          {/* Need to sort venues by proximity to user and display in that order*/}
          {this.state.venues.map((venue, index) => {
            const searchValue = this.state.text.toLowerCase();

            if(searchValue.length === 0) {
              return (
                <Venue
                  key={index}
                  venue={venue}
                  selectVenue={this.selectVenue.bind(this)}
                />
              );
            }
            if(venue.name.toLowerCase().indexOf(searchValue) >= 0) {
              return (
                <Venue
                  key={index}
                  venue={venue}
                  selectVenue={this.selectVenue.bind(this)}
                />
              );
            }
          })}
        </ScrollView>
        <View style={{ marginBottom: 10 }}>
          <Button
            style={localStyles.fixedBottom}
            title="Skip"
            color="lightgrey"
            onPress={() => console.log('hi')}
          />
        </View>
      </View>
    );
  }
}
