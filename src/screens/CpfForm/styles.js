import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 150,
    height: 150
  },
  formImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  formText: {
    marginTop: 30
  },
  text: {
    fontSize: 24,
    textAlign: 'center'
  },
  input: {
    marginTop: 20,
    marginBottom: 10,
    height: 35,
    width: 330,
    borderBottomWidth: 1,
    borderColor: '#000', 
    fontSize: 20
  },
  button: {
    backgroundColor: '#c98614',
    height: 50, 
    width: 330,
    borderRadius: 30,
    marginTop: 30,
    justifyContent: 'center'
  },
  textButton: {
    textAlign: 'center',
    color: '#FFF', 
    fontSize: 20
  }
})