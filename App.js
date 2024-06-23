import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [textBackgroundColor, setTextBackgroundColor] = useState('pink')
  const [name, setName] = useState('Kam')
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
        <Text>
          {name}
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
  }
});
