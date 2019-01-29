// @flow
import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { ListItem } from 'react-native-elements';

export type DispatchProps = {
  resetLogin: () => void
};

type Props = {
  navigation: {
    navigate: (route: string) => void
  }
} & DispatchProps;

class CustomDrawer extends PureComponent<Props> {
  handleLogout = () => {
    this.props.resetLogin();
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
          <ListItem title="Deconnexion" rightIcon={{ name: 'exit-to-app' }} onPress={this.handleLogout} />
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default CustomDrawer;
