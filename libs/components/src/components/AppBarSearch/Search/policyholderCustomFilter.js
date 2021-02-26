const sanitizer = value => value.replace(/[^a-z0-9]/gi, '');
const lowerCase = value => String(value).toLowerCase();

const otimizedLabelSearch = (input, label) =>
  input.split(' ').reduce((acc, cur) => acc && lowerCase(label).includes(lowerCase(cur)), true);

const customSearch = (input, data) => {
  const searchValue = lowerCase(sanitizer(input));
  const otherPropValues = Object.values(data);

  return otherPropValues.some(current => lowerCase(current).includes(searchValue));
};

export const selectCustomFilter = (option, rawInput) => {
  const { label, value, data } = option;
  if (!rawInput || !label || !value) return true;

  const propSearch = customSearch(rawInput, data);
  const labelSearch = otimizedLabelSearch(rawInput, label);
  return labelSearch || lowerCase(value).includes(rawInput) || propSearch;
};
