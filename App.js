import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [textBackgroundColor, setTextBackgroundColor] = useState('pink')
  const changeColor = () => {
    setTextBackgroundColor('black')
  }
  return (
    <View style={styles.container}>

      <Text style={[styles.textFirst, { backgroundColor: textBackgroundColor }]}>
        Hello there! It is my first app!
      </Text>

      <Button style={styles.btn}
        title="Click Me"
        onPress={() => changeColor()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    fontSize: 10,
    color: 'blue',
    backgroundColor: 'green',

  },
  textFirst: {
    fontSize: 20,
    marginBottom: 30,
    backgroundColor: 'green'

  }
});
