/* eslint-disable no-param-reassign */
const maskCurrency = (value: string): string => {
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d)(\d{2})$/, '$1,$2');
  value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');
  return value;
};

const maskCurrencyNumber = (value: string): string => {
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d)(\d{2})$/, '$1.$2');
  value = value.replace(/(?=(\d{3})+(\D))\B/g, '');
  return value;
};

export { maskCurrency, maskCurrencyNumber };
