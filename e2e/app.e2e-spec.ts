import { DeployCLIpocPage } from './app.po';

describe('deploy-clipoc App', function() {
  let page: DeployCLIpocPage;

  beforeEach(() => {
    page = new DeployCLIpocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
