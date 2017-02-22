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
          {this.props.geoFences.map((geoFence) => (
            <MapView.Circle
              center = {{
                latitude: geoFence.latitude,
                longitude: geoFence.longitude
              }}
              radius={geoFence.radius}
              fillColor="rgba(0, 0, 0, 0.2)"
              strokeColor="rgba(0, 0, 0, 0.2)"
            />
          ))}
          {this.props.geoFences.map((geoFence) => (
            <MapView.Marker
              coordinate={{
                latitude: geoFence.latitude,
                longitude: geoFence.longitude
              }}
              title={"Lands End Stage"}
            />
          ))}
          {this.props.users.map((user) => (
            <MapView.Marker
              coordinate={{
                latitude: user.coordinates.latitude,
                longitude: user.coordinates.longitude
              }}
              title={user.name}
              description={"Add code to determine stage"}
            />
          ))}
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
    user: store.auth.user.uid,
    users: store.location.users,
    geoFences: store.location.geoFences,
  };
})(MapViewer);
