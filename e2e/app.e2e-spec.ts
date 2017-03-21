import { A2AcReactiveFormRpmPage } from './app.po';

describe('a2-ac-reactive-form-rpm App', () => {
  let page: A2AcReactiveFormRpmPage;

  beforeEach(() => {
    page = new A2AcReactiveFormRpmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
