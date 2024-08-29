export const productTypesTemplate = [
  // { name: 'Диагностика 7500₽', code: 'Diagnost', price: 7500 },
  { name: 'Диагностика+коррекция+подарок 15.000₽', code: 'DiagnostPlusCorr', price: 15000 },
  // { name: 'Тест оплаты* не платить', code: 'test', price: 500 },
]

export const prices = {
  'Diagnost': 7500,
  'DiagnostPlusCorr': 7500,
  // 'test': 500,
}

export function calcSumByClient(arr: any[]): number{
  let sum = 0

  arr.forEach(el => {
    sum += prices[el.typeProduct] || 0
  })

  return sum
}