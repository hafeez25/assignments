/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const calculateTotal = {};

  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    if (calculateTotal[category]) {
      calculateTotal[category].total += price;
    } else {
      calculateTotal[category] = {
        total: price,
      };
    }
  });
  const result = Object.entries(calculateTotal).map(([category, total]) => {
    return {
      category,
      totalSpent: total.total,
    };
  });

  return result;
}

const transactions = [
  {
    itemName: "Item1",
    category: "Groceries",
    price: 50.0,
    timestamp: "2023-01-01",
  },
  {
    itemName: "Item2",
    category: "Electronics",
    price: 200.0,
    timestamp: "2023-01-02",
  },
  {
    itemName: "Item3",
    category: "Groceries",
    price: 30.0,
    timestamp: "2023-01-03",
  },
  {
    itemName: "Item4",
    category: "Electronics",
    price: 150.0,
    timestamp: "2023-01-04",
  },
  {
    itemName: "Item5",
    category: "Clothing",
    price: 100.0,
    timestamp: "2023-01-05",
  },
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);

module.exports = calculateTotalSpentByCategory;
