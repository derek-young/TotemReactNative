import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

const MapViewer = () => (
  <View>
    <MapView
      provider={MapView.PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={{
        latitude: 37.76757,
        longitude: -122.49427,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
})

export default MapViewer;
