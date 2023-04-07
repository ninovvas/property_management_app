export const negativeValue = (value) => {
    if (value && Number(value) <= 0) {
        return true;
    }
    return false;
}