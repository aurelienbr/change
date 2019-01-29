// @flow
import React from 'react';
import { Header } from 'react-native-elements';
import { Platform, StyleSheet } from 'react-native';

const CustomHeader = (props: any) => <Header {...props} containerStyle={styles.container} />;

const styles = {
  container: {
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 10,
    paddingTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? 44 : 56
  }
};

export default CustomHeader;
