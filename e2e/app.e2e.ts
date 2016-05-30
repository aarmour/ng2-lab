import { Ng2LabPage } from './app.po';

describe('ng2-lab App', function() {
  let page: Ng2LabPage;

  beforeEach(() => {
    page = new Ng2LabPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-lab works!');
  });
});
