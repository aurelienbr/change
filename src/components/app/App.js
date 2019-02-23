// @flow
import 'intl';
import React, { PureComponent } from 'react';
import { IntlProvider } from 'react-intl';
import messages from '~lang/index';
import AppNavigator from '~navigation/AppNavigator';

export type StateProps = {
  language: string
};

export type DispatchProps = {};

type Props = StateProps & DispatchProps;

class App extends PureComponent<Props> {
  render() {
    const { language } = this.props;

    return (
      <IntlProvider locale={language} messages={messages[language]} key={language}>
        <AppNavigator />
      </IntlProvider>
    );
  }
}

export default App;
