// @flow

import { LOCALE_SET_LANGUAGE } from '~actions/localeActions';

export type State = {
  language: string
};

const initialState: State = {
  language: 'en'
};

export default function(state: State = initialState, action: any): State {
  switch (action.type) {
    case LOCALE_SET_LANGUAGE:
      return {
        ...state,
        language: action.payload.language
      };
    default:
      return state;
  }
}
