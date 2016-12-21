import { VincentsPage } from './app.po';

describe('vincents App', function() {
  let page: VincentsPage;

  beforeEach(() => {
    page = new VincentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
