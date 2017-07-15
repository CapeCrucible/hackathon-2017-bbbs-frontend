import { HackathonFrontendPage } from './app.po';

describe('hackathon-frontend App', () => {
  let page: HackathonFrontendPage;

  beforeEach(() => {
    page = new HackathonFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
