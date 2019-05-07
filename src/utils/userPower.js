export const savePower = param => {
  localStorage.setItem('userPower', param);
};

export const removePower = () => {
  localStorage.removeItem('userPower');
};
