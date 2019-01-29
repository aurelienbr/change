// @flow
import React from 'react';
import { Text, StyleSheet } from 'react-native';

type Props = {
  style: any
};

const MonoText = (props: Props) => <Text {...props} style={[props.style, styles.text]} />;

const styles = StyleSheet.create({ text: { fontFamily: 'space-mono' } });

export default MonoText;
