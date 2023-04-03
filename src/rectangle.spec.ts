import { Rectangle } from './rectangle';

describe('Rectangle', () => {
  it('can calculate area', () => {
    const r = new Rectangle(5, 5);
    expect(r.area).toEqual(25);
  });
});
