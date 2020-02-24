import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  question: {
    padding: 20,
  },
  category: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: 15,
  },
  questionText: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  booleanButtons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  booleanButton: {
    height: 50,
    color: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
  },
  true: {
    backgroundColor: 'blue',
    marginRight: 10,
  },
  false: {
    backgroundColor: 'orangered',
    marginLeft: 10,
  },
  booleanButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});

export default styles;
