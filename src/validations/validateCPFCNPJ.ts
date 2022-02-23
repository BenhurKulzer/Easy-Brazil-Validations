import { mod11 } from './mod11';

/**
 * Função que valida se a string é apenas
 * números repetidos.
 *
 * @param ref String númerica
 * @returns True se for contida por apenas caracteres repetidos,
 * false caso contrário
 */
const isRepeated = (ref: string) => {
  const ret = ref.replace(new RegExp(ref[0], 'g'), '').trim().length === 0;
  return ret;
};
/**
 * Valida o CPF ou CNPJ. A entrada pode ser com ou sem máscaras.
 * O tamanho deve ser respeitado para cada tipo de entrada:
 * CPF: '000.000.000-00' ou '00000000000'.
 * CNPJ: '00.000.000/0000-00' ou '00000000000000'.
 * @param value
 */
export function validateCPFCNPJ(value: string): boolean {
  // Condicional para capturar tamanho do campo e passar a validação devida
  if (value.length < 15) {
    // Campo sem máscara
    const clearValue = String(value).replace(/\D/g, '');
    // O CPF possui 2 DVs, excluíndo para validar
    const valWithoutDvs = clearValue.substring(0, clearValue.length - 2);
    // Valida se está vazio ou é valor repetido
    if (!clearValue || isRepeated(clearValue)) {
      return false;
    }
    // Calcula o primeiro DV
    const dv1 = mod11(valWithoutDvs, 12);
    // Calcula o segundo DV2
    const dv2 = mod11(valWithoutDvs + dv1, 12);
    // Compara com a informação passada como paramêtro
    return valWithoutDvs + dv1 + dv2 === clearValue;
  }

  const clearValue = String(value).replace(/[^\d]+/g, '');
  // Campo sem máscara
  if (clearValue === '') return false;
  // Tamanho diferente do exigido
  if (clearValue.length !== 14) return false;
  // Valores carteados já conhecidos como inválidos
  if (
    clearValue === '00000000000000' ||
    clearValue === '11111111111111' ||
    clearValue === '22222222222222' ||
    clearValue === '33333333333333' ||
    clearValue === '44444444444444' ||
    clearValue === '55555555555555' ||
    clearValue === '66666666666666' ||
    clearValue === '77777777777777' ||
    clearValue === '88888888888888' ||
    clearValue === '99999999999999'
  ) {
    return false;
  }
  // O CNPJ possui 2 DVs, excluíndo para validar
  const valWithoutDvs = clearValue.substring(0, clearValue.length - 2);
  const dv1 = mod11(valWithoutDvs, 9);
  const dv2 = mod11(valWithoutDvs + dv1, 9);
  // Compara com a informação passada como paramêtro
  return valWithoutDvs + dv1 + dv2 === clearValue;
}
