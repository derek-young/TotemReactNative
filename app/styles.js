import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#393D3F',
  },
  main: {
    flex: 1,
    marginTop: 10,
    alignItems:'center',
    justifyContent: 'center'
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  login: {
    marginTop: 250,
    height: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  line: {
    alignSelf: 'stretch',
    height: 3,
    backgroundColor: '#d3d3d3'
  },
  thinLine: {
    alignSelf: 'stretch',
    height: 1,
    backgroundColor: '#d3d3d3'
  },
  h2: {
    color: '#1cafff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  textMed: {
    color: '#1cafff',
    fontSize: 20
  },
  buttonFull: {
    backgroundColor: '#222222',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 30,
    width: Dimensions.get('window').width * 0.7,
    padding: 5,
    backgroundColor: 'lightgray',
    borderRadius: 3
  },
});
