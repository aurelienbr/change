// @flow
import type { StateProps } from 'components/app/App';
import App from 'components/app/App';
import { connect } from 'react-redux';

import type { StateType } from 'types/Actions';

export default connect(
  (state: StateType): StateProps => ({
    language: state.locale.language
  })
)(App);
