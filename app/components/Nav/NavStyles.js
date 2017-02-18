import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    alignItems:'center',
    justifyContent: 'center',
    height: 40
  },
  text: {
    color: '#1cafff',
    fontSize: 18
  },
  mini: {
    alignSelf: 'stretch',
    backgroundColor: 'lightgrey',
    paddingTop: 3,
    paddingBottom: 3,
    alignItems:'center'
  },
  miniBar: {
    width: 35,
    height: 5,
    backgroundColor: 'black',
    margin: 3
  },
  highlight: {
    opacity: 0.5
  }
});
