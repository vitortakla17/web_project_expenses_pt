let budgetValue = 0;

let expenseEntries = [
    ["groceries", 33],
    ["restaurants", 50],
    ["transport", 12],
    ["home", 70],
    ["subscriptions", 14],
    ["groceries", 28],
    ["subscriptions", 12]
]

let totalExpensesValue = expenseEntries.reduce((total, expense) => {
    return total + expense[1];
}, 0);

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

function calculateCategoryExpenses(category) {
    let categoryExpense = 0;
    for (let i = 0; i < expenseEntries.length; i++) {
        if (category === expenseEntries[i][0]) {
            categoryExpense += expenseEntries[i][1];
        }
    }
    return categoryExpense;
}

function calculateLargestCategory() {
    const categories = ["groceries", "restaurants", "transport", "home", "subscriptions"]
    const categoriesTotals = [];

    for (let i = 0; i < categories.length; i++) {
        const categoryName = categories[i];
        const categoryTotal = calculateCategoryExpenses(categoryName);
        categoriesTotals.push([categoryName, categoryTotal]);
    }

    let maxIndex = 0;

    for (let i = 1; i < categoriesTotals.length; i++) {
    if (categoriesTotals[i][1] > categoriesTotals[maxIndex][1]) {
        maxIndex = i;
        }
    }
    return categoriesTotals[maxIndex][0];
}

function addExpenseEntry (expenseEntry) {
    if (!Array.isArray(expenseEntry) || expenseEntry.length !== 2) {
        console.log("Erro: expenseEntry deve ser um array com 2 elementos");
        return;
    }
    
    if (typeof expenseEntry[1] !== 'number') {
        console.log("Erro: o valor deve ser um número");
        return;
    }
    
    if (expenseEntry[1] <= 0) {
        console.log("Erro: o valor deve ser positivo");
        return;
    }

    expenseEntries.push (expenseEntry);
    totalExpensesValue += expenseEntry[1];
}