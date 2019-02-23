// @flow

export type LOCALE_SET_LANGUAGE_ACTION = {
  type: 'LOCALE_SET_LANGUAGE',
  payload: {
    payload: { language: string }
  }
};

export type Action = LOCALE_SET_LANGUAGE_ACTION;
