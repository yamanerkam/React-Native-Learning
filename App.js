import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textFirst}>Hello there! It is my first app!</Text>
      <Button style={styles.btn}
        title="Click Me"
        onPress={() => console.log('Button pressed!')}
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
