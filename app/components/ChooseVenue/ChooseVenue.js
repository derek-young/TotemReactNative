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
        <Text style={styles.textMed}>Choose a Venue</Text>
        <View style={localStyles.row}>
          <Text style={styles.textSm}>Search: </Text>
          <TextInput
            style={localStyles.input}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>
      </View>
    );
  }
}
