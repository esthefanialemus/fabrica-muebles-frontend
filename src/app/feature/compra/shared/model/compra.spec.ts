import { Compra } from './compra';

describe('Compra', () => {
  it('should create an instance', () => {
    expect(new Compra(1,1000000,'2022-04-10 10:22:33','2022-04-10 20:22:33','2022-04-10 20:22:33',1)).toBeTruthy();
  });
});
