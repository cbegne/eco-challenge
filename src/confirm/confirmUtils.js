export const getParametersFromUrl = url => {
  if (!url) return {};

  const index = url.indexOf('?');

  if (index === -1) return {};

  const params = url.slice(index + 1).trim();
  if (!params) {
    return {};
  }

  const reducer = (accumulator, currentParam) => {
    const [key, value] = currentParam.split('=');
    return { ...accumulator, [key]: value };
  };

  return params.split('&').reduce(reducer, {});
};
