export class Ng2LabPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-lab-app h1')).getText();
  }
}
