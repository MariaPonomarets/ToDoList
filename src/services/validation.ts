export const emailValidation = (email: string) => {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return reg.test(email);
};

export const passwordValidation = (password: string) => password.length > 5;
