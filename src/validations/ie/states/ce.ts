export function validateCE(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');

  const { length } = ieStr;

  if (length !== 9) return false;

  const position = length - 1;
  let weight = length;
  const body = ieStr.substr(0, position);
  let sum = 0;

  body.split('').forEach(digit => {
    sum += +digit * weight;
    weight--;
  });

  const rest = sum % 11;
  let dig = 11 - rest;
  if (dig >= 10) {
    dig = 0;
  }

  return dig === +ieStr.charAt(position);
}
