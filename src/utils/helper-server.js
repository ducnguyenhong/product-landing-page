import { MOBILE_NETWORK } from './data';

export const formatCurrency = (price) => {
  const number = Number(price);
  if (isNaN(number)) {
    return '';
  }
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(price));
};

export const findNetworkByPrefix = (prefix) => {
  if (!prefix) {
    return null;
  }
  if (prefix.startsWith('+84') || prefix.startsWith('84')) {
    prefix = prefix.replace(/^(\+84|84)/, '0');
  }
  return MOBILE_NETWORK.find((network) => network.prefixes.includes(prefix.slice(0, 3))) || null;
};
