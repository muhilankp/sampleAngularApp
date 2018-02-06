import { SampleAngularAppPage } from './app.po';

describe('sample-angular-app App', () => {
  let page: SampleAngularAppPage;

  beforeEach(() => {
    page = new SampleAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
