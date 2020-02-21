import React from 'react';
import { ConnectedUserInput, UserInputProps } from 'trivia-main';
import { View, TextInput, StyleSheet } from 'react-native';


function UserInput({username, setUsername} :UserInputProps) {

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  }

  return(
    <View>
        <TextInput
          style={styles.input}
          value={username}
          placeholder="Username..."
          onChangeText={handleUsernameChange}
        />
    </View>
  )
}

export default ConnectedUserInput(UserInput);

const styles = StyleSheet.create({
  input: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    borderColor: '#333333',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 20,
  },
});