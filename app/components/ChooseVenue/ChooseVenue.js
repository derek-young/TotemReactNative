import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import ButtonFull from '../common/ButtonFull';
import styles from '../../styles';
import localStyles from './ChooseVenueStyles';
import store from '../../store';

export default class ChooseVenue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      nearby: [
        { id: 'osl123', name: 'Outside Lands Music and Art Festival',
          address: {
            line1: 'Golden Gate Park',
            line2: '',
            line3: '',
            city: 'San Francisco',
            state: 'CA',
            zip: '94122',
            country: 'USA'
          }
        }
      ],
      venues: [
        { id: 'osl123', name: 'Outside Lands Music and Art Festival',
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
        { id: 'coach123', name: 'Coachella Valley Music and Arts Festival',
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

  chooseVenue() {

  }

  render() {
    return (
      <View style={localStyles.main}>
        <Text style={styles.h2}>Choose a Venue</Text>
        <View style={localStyles.section}>
          <TextInput
            style={localStyles.input}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder="Search"
          />
        </View>
        <View style={localStyles.section}>
          <Text style={localStyles.textSm}>Nearby</Text>
          {this.state.nearby.map((venue) => (
            <View style={localStyles.row}>
              <Text>{venue.name}</Text>
              <Text>{venue.address.line1}</Text>
              <Text>{venue.address.line2}</Text>
              <Text>{venue.address.city}</Text>
              <Text>{venue.address.state}</Text>
              <Text>{venue.address.zip}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
