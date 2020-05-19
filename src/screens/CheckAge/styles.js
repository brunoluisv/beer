import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c98614'
  },
  adjust: {
    marginTop: 80,
    alignItems: 'center'
  },
  logo: {
    width: 150,
    height: 150,
    alignItems: 'center',
    marginBottom: 20
  },  
  text: {
    width: 270,
    fontSize: 40,
    textAlign: 'center',
    color: '#FFF'
  },
  checkButtons: {
    flexDirection: 'row'
  },
  button: {
    width: 100,
    height: 60,
    backgroundColor: '#000',
    margin: 20,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#FFF',
    backgroundColor: '#c98614',
    justifyContent: 'center',
    alignItems: 'center'
  },
  response: {
    color: '#FFF',
    fontSize: 20
  }
});