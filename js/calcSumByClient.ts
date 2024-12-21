export const productTypesTemplate = [
  { name: 'Диагностика всех сфер жизни 7500₽', code: 'Diagnost', price: 5000 },
  { name: 'Коррекция всех сфер жизни 5000₽', code: 'DiagnostPlusCorr', price: 5000 },
  { name: 'Диагностика+коррекция+подарок 10000₽', code: 'Diagnost_2', price: 10000 },
]

export const prices = {
  'Diagnost': 5000,
  'DiagnostPlusCorr': 5000,
  'Diagnost_2': 10000
  // 'test': 500,
}

export function calcSumByClient(arr: any[]): number{
  let sum = 0

  arr.forEach(el => {
    sum += prices[el.typeProduct] || 0
  })

  return sum
}