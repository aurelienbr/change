// @flow
import React, { PureComponent } from 'react';
import { ActivityIndicator, Platform, StatusBar, StyleSheet, View } from 'react-native';
import AppProvider from 'components/app/AppProvider';
import { WHITE } from 'constants/colorConstants';

type Props = {
  skipLoadingScreen: boolean
};

type State = {
  isLoadingComplete: boolean
};

class AppBootstrap extends PureComponent<Props, State> {
  state = {
    isLoadingComplete: false
  };

  componentDidMount() {
    this._loadResources();
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen)
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );

    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppProvider />
      </View>
    );
  }

  _loadResourcesAsync = () =>
    Promise.all([
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('assets/fonts/SpaceMono-Regular.ttf'),
        regular: require('assets/fonts/Montserrat-Regular.ttf'),
        light: require('assets/fonts/Montserrat-Light.ttf'),
        bold: require('assets/fonts/Montserrat-Bold.ttf')
      })
    ])
      .then(this.handleFinishLoading)
      .catch(this.handleLoadingError);

  handleLoadingError = (error: Error) => {
    // eslint-disable-next-line
    console.warn(error);
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default AppBootstrap;
