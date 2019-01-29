// @flow
import { connect } from 'react-redux';

import Drawer from 'components/fragments/Drawer';
import { resetLogin } from 'actions/loginActions';

import type { DispatchType } from 'types/Actions';
import type { DispatchProps } from 'components/fragments/Drawer';

export default connect(
  null,
  (dispatch: DispatchType): DispatchProps => ({
    resetLogin: () => dispatch(resetLogin())
  })
)(Drawer);
