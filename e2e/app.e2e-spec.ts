import { SongLibPage } from './app.po';

describe('song-lib App', () => {
  let page: SongLibPage;

  beforeEach(() => {
    page = new SongLibPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
