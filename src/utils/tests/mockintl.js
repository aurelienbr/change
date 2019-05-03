// @flow
import { IntlProvider } from 'react-intl';
import React from 'react';
import messages from '~lang/en.json';

const locale = 'en';

export default function withIntl(children: any) {
  return (
    <IntlProvider messages={messages} locale={locale}>
      {children}
    </IntlProvider>
  );
}
