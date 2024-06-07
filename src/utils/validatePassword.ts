export const validatePassword = (password: string) => {
    return new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[_!"#$%&'()*+,\-./:;<=>?@[\\\]^`{|}~]).{8,}$/,
    ).test(password);
};
