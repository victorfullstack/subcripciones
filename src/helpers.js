export const moneyFormat = amonut => {
    return amonut.tolocaleString('en-US', {
        style:'currency',
        currency: 'USD'
    })
}