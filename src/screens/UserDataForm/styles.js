import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  formImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90
  },
  logo: {
    width: 150,
    height: 150
  },
  formText: {
    marginTop: 30
  },
  text: {
    fontSize: 22
  },
  input: {
    marginTop: 10,
    height: 35,
    width: 330,
    borderBottomWidth: 1,
    borderColor: '#000', 
    fontSize: 20
  },
  informText: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 320,
    marginTop: 20
  },
  button: {
    backgroundColor: '#c98614',
    height: 50, 
    width: 330,
    borderRadius: 30,
    marginTop: 40,
    justifyContent: 'center'
  },
  textButton: {
    textAlign: 'center',
    color: '#FFF', 
    fontSize: 20
  }
});