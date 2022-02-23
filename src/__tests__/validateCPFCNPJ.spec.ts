import { validateCPFCNPJ } from '../index';

describe('Validate CPF or CNPJ', () => {
  it('should be able return true to valid CPF or CNPJ', () => {
    expect.assertions(4);

    expect(validateCPFCNPJ('012.345.678-90')).toBe(true);
    expect(validateCPFCNPJ('248.283.728-65')).toBe(true);

    expect(validateCPFCNPJ('66.919.381/0001-15')).toBe(true);
    expect(validateCPFCNPJ('97.441.254/0001-87')).toBe(true);
  });

  it('should be able return false to invalid CPF or CNPJ', () => {
    expect.assertions(2);

    expect(validateCPFCNPJ('248.283.728-66')).toBe(false);

    expect(validateCPFCNPJ('12.732.455/0001-25')).toBe(false);
  });

  it('should be able return false to pass a empty string', () => {
    expect(validateCPFCNPJ('')).toBe(false);
  });

  it('should be able return false to pass a only repeated numbers', () => {
    expect(validateCPFCNPJ('000.000.000-00')).toBe(false);
    expect(validateCPFCNPJ('111.111.111-11')).toBe(false);

    expect(validateCPFCNPJ('00.000.000/0000-00')).toBe(false);
    expect(validateCPFCNPJ('11.111.111/1111-11')).toBe(false);
  });
});
