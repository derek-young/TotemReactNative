import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';


class MapViewer extends React.Component {
  render() {
    if (this.props.users && this.props.user) {
      const userID = this.props.user;
      const name = this.props.users[userID].name;
      const lat = this.props.users[userID].coordinates.latitude;
      const long = this.props.users[userID].coordinates.longitude;
      console.log(name, lat, long);
    }
    return (
      <View>
        <MapView
          provider={MapView.PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 37.76757,
            longitude: -122.49427,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0121,
          }} >
          <MapView.Marker
            coordinate={{
              latitude: 37.76757,
              longitude: -122.49427
            }}
            title={"Pat"}
            description={"Land's End"}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
})

export default connect((store) => {
  return {
    users: store.location.users,
    user: store.auth.user.uid
  };
})(MapViewer);
