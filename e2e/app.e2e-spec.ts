import { UserlistsPage } from './app.po';

describe('userlists App', () => {
  let page: UserlistsPage;

  beforeEach(() => {
    page = new UserlistsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
