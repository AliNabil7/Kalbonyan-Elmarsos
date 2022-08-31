const account = {
  name: "Ali Nabil",
  expenses: [],
  income: [],
  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount,
    });
  },
  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount,
    });
  },
  getAccountSummary: function () {
    let totalExpenses = 0;
    let totalIncome = 0;

    this.expenses.forEach(function (expense) {
      totalExpenses = totalExpenses + expense.amount;
    });

    this.income.forEach(function (income) {
      totalIncome = totalIncome + income.amount;
    });

    return `${this.name} has a balance of $${
      totalIncome - totalExpenses
    }. $${totalIncome} in income. $${totalExpenses} in expenses`;
  },
};

// FIRST CHALLENGE

// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> Ali Nabil has $1250 in expenses.

// SECOND CHALLENGE

// 1. add income array to account
// 2. addIncome method -> description, amount
// 3. Tweak getAccountSummary

// Ali Nabil has a balance of $10. $100 in incom. $90 in expenses.

account.addExpense("Rent", 950);
account.addExpense("Coffee", 2);
account.addIncome("Job", 1000);
console.log(account.getAccountSummary());
