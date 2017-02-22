import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

export default StyleSheet.create({
  section: {
    height: 70,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    height: 50,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSm: {
    color: 'lightgrey',
    fontSize: 16
  },
  selection: {
    width: Dimensions.get('window').width * 0.9,
    padding: 5,
    backgroundColor: 222222,
    borderWidth: 1,
    borderRadius: 3,
  },
  fixedBottom: {
    position: 'absolute',
    bottom: 0
  }
});
