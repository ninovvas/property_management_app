export const confirmPassword = (password, confirmPassword) => {

    if (password.length !== confirmPassword.length) {
        return true;
    }
    return false;
}