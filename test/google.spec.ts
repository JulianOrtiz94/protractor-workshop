import { browser } from 'protractor';

describe('This is the first example of protractor', () => {
  it('Nos fuimos pa PSL HPTA!!! ', () => {
    browser.ignoreSynchronization = true;
    browser.get('http://www.google.com');
    expect(browser.getTitle()).toEqual('Google');
  });
});
