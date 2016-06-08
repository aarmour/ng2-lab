import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2LabAppComponent } from './ng2-lab.component';

beforeEachProviders(() => [Ng2LabAppComponent]);

describe('App: Ng2Lab', () => {
  it('should create the app',
      inject([Ng2LabAppComponent], (app: Ng2LabAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-lab works!\'',
      inject([Ng2LabAppComponent], (app: Ng2LabAppComponent) => {
    expect(app.title).toEqual('ng2-lab works!');
  }));
});
