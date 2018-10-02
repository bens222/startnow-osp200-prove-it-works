const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
  let mortgage = null;

  beforeEach(() => {
    mortgage = new Mortgage();
  });

  it('should have a constructor', () => {
    expect(mortgage.constructor).to.exist;
  });

  it('should have a monthly payment function', () => {
    expect(mortgage.monthlyPayment).to.exist;
  });

  it('should calculate a correct monthly payment', () => {
    mortgage = new Mortgage(400000, 3, 15, 12);
    expect(mortgage.monthlyPayment()).to.equal('2762.33');
  });

  it('should calculate a correct montly payment', () => {
    mortgage = new Mortgage(500000, 6, 30, 12);
    expect(mortgage.monthlyPayment()).to.equal('2997.75');
  });
});
