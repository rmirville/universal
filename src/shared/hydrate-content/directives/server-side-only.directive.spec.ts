import { ServerSideOnlyDirective } from './server-side-only.directive';

describe('ServerSideOnlyDirective', () => {
  it('should create an instance', () => {
    const directive = new ServerSideOnlyDirective();
    expect(directive).toBeTruthy();
  });
});
