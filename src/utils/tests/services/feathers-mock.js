// @flow

import nock from 'nock';
import { API_URL } from '~constants/apiConstants';

class Mock {
  nock = nock;

  post(url: string, code: number, response: Object, isError: boolean = false) {
    const structure = this.nock(API_URL)
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .post(url);

    if (isError) return structure.replyWithError({ ...response, code });
    return structure.reply(code, response);
  }

  options(url: string, code: number, headers: Object, isError: boolean = false) {
    const structure = this.nock(API_URL)
      .defaultReplyHeaders({ 'access-control-allow-origin': '*', ...headers })
      .intercept(url, 'OPTIONS');

    if (isError) return structure.replyWithError({ code });
    return structure.reply(code, {});
  }

  clean() {
    this.nock.cleanAll();
  }

  restore() {
    this.nock.cleanAll();
    this.nock.restore();
  }
}

export default Mock;
