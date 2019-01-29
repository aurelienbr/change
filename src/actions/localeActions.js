// @flow

export const LOCALE_SET_LANGUAGE = 'LOCALE_SET_LANGUAGE';

export type LOCALE_SET_LANGUAGE_ACTION = {
  type: 'LOCALE_SET_LANGUAGE',
  payload: {
    language: string
  }
};

export type Action = LOCALE_SET_LANGUAGE_ACTION;

export function setLanguage(language: string): LOCALE_SET_LANGUAGE_ACTION {
  return {
    type: LOCALE_SET_LANGUAGE,
    payload: { language }
  };
}
