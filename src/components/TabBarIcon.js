// @flow
import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from 'constants/colorConstants';

type Props = {
  name: string,
  focused: boolean
};

const TabBarIcon = (props: Props) => (
  <Icon name={props.name} size={26} style={styles.icon} color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault} />
);

const styles = StyleSheet.create({ icon: { marginBottom: -3 } });

export default TabBarIcon;
