const getRandomPositiveInteger = (a = 0, b = 1000) => {
  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getRandomPositiveIntegerByStep = (a, b, step = 1) => {
  if (a < 0 || b < 0 || step <= 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  const min = Math.ceil(lower / step);
  const max = Math.floor(upper / step);

  if (min > max) {
    return NaN;
  }

  return getRandomPositiveInteger(min, max) * step;
};

const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const isEscapeKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

export {
  getRandomPositiveInteger,
  getRandomPositiveIntegerByStep,
  getRandomArrayElement,
  isEscapeKey
};
