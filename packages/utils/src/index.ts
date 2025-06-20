// packages/utils/src/index.ts
export function formatToCurrency(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

export function capitalizeFirstLetter(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
