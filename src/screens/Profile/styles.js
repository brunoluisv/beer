import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5ECCE'
  },
  card: {
    width: 350,
    height: 220,
    marginTop: 60,
    borderRadius: 10
  },
  bodycard: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 5,
    backgroundColor: "#FFF",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10
  },
  footercard: {
    flex: 2.2,
    backgroundColor: "#000",
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    position: 'absolute',
    width: 100,
    height: 100,
    marginTop: 15
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 50,
    width: 300,
    borderBottomWidth: 1,
    borderColor: '#000',
    fontSize: 20
  },
  button: {
    width: 240,
    height: 60,
    backgroundColor: '#000',
    borderRadius: 60,
    marginTop: 80,
    justifyContent: 'center'
  },
  confirm: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 24
  }
});