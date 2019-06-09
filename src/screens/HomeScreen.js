import React from 'react';
import { Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';

const HomeScreen = () => (
  <View>
    <Text>First big project</Text>
  </View>
);

export default withNavigation(HomeScreen);
