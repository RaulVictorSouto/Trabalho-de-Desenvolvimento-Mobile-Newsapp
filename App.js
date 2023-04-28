import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import NewsScreen from './src/NewsScreen';
import styles from './src/Stylepage';
const App = () => {
  return (
    <SafeAreaView style = {{backgroundColor: '#BACBD9', paddingTop: 15, flex: 1}}>
      <Text style={styles.title}>Newsapp</Text>
      <NewsScreen />
    </SafeAreaView>
  );
};

export default App;
