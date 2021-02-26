export function formatCurrency(value, showCurrency = true) {
  let formatter;

  if(showCurrency) {
    formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  } else {
    formatter = new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2
    })
  }

  return formatter.format(value)
}