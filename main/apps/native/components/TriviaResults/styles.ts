import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  triviaResults: {
    padding: 20,
  },
  score: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  scoreAdded: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
  scoreMessage: {
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  results: {
    marginTop: 30,
    marginBottom: 30,
  },
  result: {
    display: 'flex',
    flexDirection: 'row',
  },
  mark:{
    fontSize: 20,
    marginEnd: 10,
  },
  question: {
    fontWeight: 'bold',
    maxWidth: '90%',
  },
  answer: {
    marginBottom: 20,
  }
});

export default styles;
