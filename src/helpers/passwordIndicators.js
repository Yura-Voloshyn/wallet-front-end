export const changeMainLineColor = password => {
  if (password.length < 6 || password.length > 12) {
    return '#F1E6E5';
  }
  if (password.length < 9) {
    return '#F1F1E5';
  }
  if (password.length <= 12) {
    return '#E5F1EF';
  }
};

export const changeAfterLineColor = password => {
  if (password.length < 6 || password.length > 12) {
    return '#F21407';
  }
  if (password.length < 9) {
    return '#DDDD24';
  }
  if (password.length <= 12) {
    return '#24CCA7';
  }
};

export const changeAfterLineWidth = password => {
  if (password.length < 6) {
    return '33%';
  }
  if (password.length < 9) {
    return '66%';
  }
  if (password.length <= 12 || password.length > 12) {
    return '100%';
  }
};
