import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

export default StyleSheet.create({
  main: {
    height: 70,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: '#1cafff',
    fontSize: 20
  },
  subtext: {
    color: 'grey'
  },
  profile_img: {
    width: 50,
    height: 50,
    marginRight: 5
  },
  button: {
    width: Dimensions.get('window').width,
    backgroundColor: '#222222',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
