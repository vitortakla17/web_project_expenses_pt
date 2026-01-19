let budgetValue = 0;
let totalExpensesValue = 0;

let expenseEntries = [
    // ["groceries", 33],
    // ["restaurants", 50],
    // ["transport", 12],
    // ["home", 70],
    // ["subscriptions", 14],
    // ["groceries", 28],
    // ["subscriptions", 12]
]

for (let i = 0; i < expenseEntries.length; i++) {
    totalExpensesValue += expenseEntries[i][1];
    console.log("Despesas totais: " + totalExpensesValue);
}

function calculateAverageExpense() {
    if (expenseEntries.length === 0) {
    return 0;
}
    let averageExpense = totalExpensesValue / expenseEntries.length;
    return averageExpense;
}

function calculateBalance() {
    let balance = budgetValue - totalExpensesValue;
    return balance;
}

let balanceColor = "green";

function updateBalanceColor() {
    const currentBalance = calculateBalance();
    if (currentBalance < 0) {
        balanceColor = "red";
    } else if (currentBalance <= 25 / 100 * budgetValue) {
        balanceColor = "orange";
    } else {
        balanceColor = "green";
    }
}