/* jshint -W117 */
describe('E2E: Home', function () {
  beforeEach(function() {
    browser.get('/');
  });

  it('should have home in its <title> tag.', function() {
    expect(browser.getTitle()).toContain('home');
  });

  it('should have home button active', function() {
    var curNav = element(by.css('.current')).$('a');
    expect(curNav.getText()).toBe('Home');
  });
});
