// Calculate Income or Balance
document.getElementById('calculate').addEventListener('click', function () {
    let foodInput = document.getElementById('food')
    let foodValue = foodInput.value
    let rentInput = document.getElementById('rent')
    const rentValue = rentInput.value
    let clothesInput = document.getElementById('clothes')
    const clothesValue = clothesInput.value
    let totalExpenses = document.getElementById('total-expenses')
    const income = document.getElementById('income')
    const incomeValue = income.value
    const balance = document.getElementById('balance')
    const total = parseInt(foodValue) + parseInt(rentValue) + parseInt(clothesValue)
    if (isNaN(total, parseInt(income))) {
        alert('Enter your number and text is not allow!!')
        income.value = ''
        totalExpenses.innerText = 0
        balance.innerText = 0
    } else {
        if (foodValue >= 0 && rentValue >= 0 && clothesValue >= 0 && incomeValue >= 0) {
            if (incomeValue > total) {
                totalExpenses.innerText = total
                balance.innerText = parseInt(incomeValue) - parseInt(totalExpenses.innerText)
            } else {
                alert('Expenditure is more than income.')
                totalExpenses.innerText = 0
                balance.innerText = 0
            }
        } else {
            alert('Enter is positive number.')
            totalExpenses.innerText = 0
            balance.innerText = 0
        }
    }

})

// Save Balance

document.getElementById('save-button').addEventListener('click', function () {
    const income = document.getElementById('income')
    const incomeValue = income.value
    const balance = document.getElementById('balance')
    const balanceText = balance.innerText
    const saveInput = document.getElementById('save-input')
    const saveInputValue = saveInput.value
    const totalSaveMoney = parseInt(incomeValue) / 100 * parseInt(saveInputValue)
    let savingAmount = document.getElementById('saving-amount')
    let remainingBalance = document.getElementById('remaining-balance')
    if (isNaN(totalSaveMoney)) {
        alert('Enter your number and text not allow!!')
        saveInput.value = ''
        savingAmount.innerText = 0
        remainingBalance.innerText = 0
    } else {
        if (totalSaveMoney >= 0) {
            if (totalSaveMoney <= balanceText) {
                savingAmount.innerText = totalSaveMoney
                const totalBalance = parseInt(balanceText) - totalSaveMoney
                remainingBalance.innerText = totalBalance
            } else {
                alert('Saving is more than money.')
                savingAmount.innerText = 0
                remainingBalance.innerText = 0
            }
        } else {
            alert('Enter your positive number')
            savingAmount.innerText = 0
            remainingBalance.innerText = 0
        }
    }
})