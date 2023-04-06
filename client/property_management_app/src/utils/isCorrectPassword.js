export const isCorrectPassword = (password) => {
    if (password && password.length <= 4) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}