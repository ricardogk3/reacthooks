import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Content from './app/components/Content';
import Header from './app/components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Content/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
