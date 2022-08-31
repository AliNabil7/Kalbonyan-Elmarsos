let myAccount = {
  name: "Ali Nabil",
  expenses: 0,
  income: 0,
};

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
};

// The rest of video #30 Code
// addExpense(myAccount, 2.5);
// console.log(myAccount);

// addIncome
let addIncome = function (account, amount) {
  account.income = account.income + amount;
};

// resetAccount
let resetAccount = function (account) {
  account.expenses = 0;
  account.income = 0;
};

// getAccountSummary
let getAccountSummary = function (account) {
  return `Account for ${account.name} has $${
    account.income - account.expenses
  }. $${account.income} in income. $${account.expenses} in expenses.`;
};
// Account for Ali has $900. $1000 in income. $100 in expenses.

// addIncome
addIncome(myAccount, 500);
// addExpense
addExpense(myAccount, 125);
// addExpense
addExpense(myAccount, 12.5);
// getAccountSummary
console.log(getAccountSummary(myAccount));
// resetAccount
resetAccount(myAccount);
// getAccountSummary
console.log(getAccountSummary(myAccount));
