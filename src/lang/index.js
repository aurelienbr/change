import { addLocaleData } from 'react-intl';

import localeEn from 'react-intl/locale-data/en';
import en from 'lang/en.json';

import localeFr from 'react-intl/locale-data/fr';
import fr from 'lang/fr.json';

addLocaleData([...localeEn, ...localeFr]);

const messages = {
  fr,
  en
};

export const languages = [
  {
    longname: 'Français',
    name: 'fr',
    flag: 'FR'
  },
  {
    longname: 'English',
    name: 'en',
    flag: 'GB'
  }
];

export default messages;
