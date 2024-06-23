import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [textBackgroundColor, setTextBackgroundColor] = useState('pink')
  const changeColor = () => {
    if (textBackgroundColor == 'pink') setTextBackgroundColor('purple')
    else setTextBackgroundColor('pink')

  }
  return (
    <><View style={styles.container}>
      <View style={styles.firstView}>
        <Text style={styles.txt}>
          Hi!
          <Text>inheritance</Text>
        </Text>
        <Text>
          Hi!
        </Text><Text>
          Hi!
        </Text><Text>
          Hi!
        </Text>
      </View>
      <Text style={[styles.textFirst, { backgroundColor: textBackgroundColor }]}>
        Hello there! It is my first app!
      </Text>

      <Button style={styles.btn}
        title="Click Me"
        onPress={() => changeColor()}
      />
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
    color: 'blue',
    backgroundColor: 'green',

  },
  textFirst: {
    fontSize: 20,
    marginBottom: 30,
    backgroundColor: 'green'

  }, firstView: {

    backgroundColor: 'green',
    padding: 20,
  }, txt: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 23,
    margin: 20
  }
});
