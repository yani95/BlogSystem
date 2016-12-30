import { BlogSystemPage } from './app.po';

describe('blog-system App', function() {
  let page: BlogSystemPage;

  beforeEach(() => {
    page = new BlogSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
