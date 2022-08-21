import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TicTocToe from './components/TicTocToe'

export default function App() {
  return (
    <View style={styles.container}>
      <TicTocToe/>
    </View>
  );
}
const styles=StyleSheet.create({
  container:{
    flex:1,
  }
})

