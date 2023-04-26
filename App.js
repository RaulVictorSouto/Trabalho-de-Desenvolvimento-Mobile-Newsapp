import React from 'react';
import { View, Text } from 'react-native';
import NewsScreen from './src/NewsScreen';

const App = () => {
  return (
    <View>
      <Text style={{marginTop:50}}>Newsapp</Text>
      <NewsScreen />
    </View>
  );
};

export default App;
