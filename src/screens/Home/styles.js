import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center'
  },
  header: {
    justifyContent: 'flex-start',
    marginTop: 50
  },
  headerText: {
    marginTop: 10
  },
  text: {
    fontSize: 40,
    textAlign: 'center'
  },
  logo: {
    width: 150,
    height: 150
  },
  body: {
    marginTop: 10
  },  
  card: {
    height: 300,
    width: 330,
    borderRadius: 10,
    marginTop: 20
  },
  image: {
    width: 330,
    height: 300,
    borderRadius: 10
  },
  textChoppeira: {
    position: 'absolute',
    color: '#FFF',
    fontSize: 26,
    width: 270,
    top: 210,
    left: 20,
    bottom: 0
  },
  textStore: {
    position: 'absolute',
    color: '#FFF',
    fontSize: 32,
    top: 240,
    left: 20,
    bottom: 0
  },
  textLab: {
    position: 'absolute',
    color: '#FFF',
    fontSize: 32,
    top: 240,
    left: 20,
    bottom: 0
  },
  textOpen: {
    position: 'absolute',
    color: '#FFF',
    fontSize: 32,
    top: 20,
    left: 20,
    bottom: 0
  }
})