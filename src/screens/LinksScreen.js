/* eslint-disable */

import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { WHITE } from '~constants/colorConstants';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links'
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text>LinksScreen</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: WHITE
  }
});
