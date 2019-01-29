// @flow
import React from 'react';

import { IntlProvider } from 'react-intl';
import messages from 'lang/en.json';

const locale = 'en';

export default function withIntl(children: any) {
  return (
    <IntlProvider messages={messages} locale={locale}>
      {children}
    </IntlProvider>
  );
}
