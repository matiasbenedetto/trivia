import React from 'react';
import { ConnectedUserInput, UserInputProps } from 'trivia-main';
import { View, TextInput } from 'react-native';
import styles from './styles';

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
