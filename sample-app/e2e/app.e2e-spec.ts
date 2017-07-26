import { SampleAppPage } from './app.po';

describe('sample-app App', () => {
  let page: SampleAppPage;

  beforeEach(() => {
    page = new SampleAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
