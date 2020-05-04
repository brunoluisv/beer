import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: "#0B6121",
    alignItems: "center",
    justifyContent: "center",
    width: 84,
    height: 84,
    borderRadius: 42,
    elevation: 6,
    marginBottom: 60,
    shadowColor: "#0B6121",
    shadowRadius: 5,
    shadowOffset: { height: 10 },
    shadowOpacity: 0.3,
    borderWidth: 2,
    borderColor: "#FFF"
  },
  text: {
    fontWeight: "bold",
    color: "#FFF"
  }
});