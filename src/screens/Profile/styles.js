import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  header: {
    marginTop: 40
  },  
  photoMoldure: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#FFF'
  },
  cameraIcon: {
    position: 'absolute',
    left: 110,
    top: 120,
    alignItems: 'center',
    justifyContent: 'center',
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#FF8000"
  },
  headerName: {
    marginTop: 10
  },
  name: {
    fontSize: 34
  },
  infoContainer: {
    marginTop: 40
  },
  mydata: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 350,
    height: 100,
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderWidth: 1
  },
  mydataText: {
    fontSize: 24
  },
  addCard: {
    marginTop: 30,
    width: 350,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  infotext: {
    fontSize: 26,
    marginLeft: 10
  },
  add: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 110,
    height: 35,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#CCC'
  },
  addStreet: {
    marginTop: 20,
    width: 350,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});