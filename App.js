import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [textBackgroundColor, setTextBackgroundColor] = useState('pink')
  const [name, setName] = useState('Kam')
  const [nameInput, setNameInput] = useState('')

  const changeColor = () => {
    if (textBackgroundColor == 'pink') setTextBackgroundColor('purple')
    else setTextBackgroundColor('pink')

  }
  return (
    <><View style={styles.container}>

      <Text style={[styles.textFirst, { backgroundColor: textBackgroundColor }]}>
        Hello there! It is my first app!
      </Text>

      <Button style={styles.btn}
        title="Click Me"
        onPress={() => changeColor()}
      />

      <View style={styles.name}>
        <View style={styles.inputArea}>
          <Text>new name is {nameInput}</Text>
          <TextInput
            style={styles.input}
            value={nameInput}
            placeholder='new name'
            onChangeText={setNameInput}
          />
          <Button
            title='update the name'
            onPress={() => setName(nameInput)}
          />
        </View>
        <Text>
          my name is {name}
        </Text>

        <Button
          onPress={() => setName('Ksenia')}
          title='change name'
        />
      </View>





      <StatusBar style="auto" />



    </View>




    </>

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
    color: 'green',

  }, name: {
    alignItems: 'center',
  }, input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }, inputArea: {
    borderColor: 'black',
    borderWidth: 2,
    margin: 21,
    padding: 23
  }
});
