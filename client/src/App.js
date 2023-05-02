
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const App = () => {
  const [bankAccount, setBankAccount] = useState('');
  const [isLinked, setIsLinked] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);

  const handleLinkAccount = (e) => {
    e.preventDefault();
    setIsLinked(true);
    setBalance(5000);
    setTransactions([
      { id: 1, amount: -50, description: 'Groceries' },
      { id: 2, amount: 250, description: 'Salary' },
      { id: 3, amount: -100, description: 'Utilities' },
    ]);
  };

  const handleBankAccountChange = (e) => {
    setBankAccount(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          {!isLinked && (
            <form onSubmit={handleLinkAccount} className="space-y-8">
              <div>
                <label htmlFor="bankAccount" className="text-sm font-bold text-gray-600">Bank Account</label>
                <input
                  id="bankAccount"
                  type="text"
                  value={bankAccount}
                  onChange={handleBankAccountChange}
                  className="block w-full p-2 border-gray-300 rounded-md"
                />
              </div>
              <button type="submit" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-400 to-light-blue-500 hover:from-cyan-600 hover:to-light-blue-600">
                Link Bank Account
              </button>
            </form>
          )}

          {isLinked && (
            <div>
              <h3 className="text-xl font-bold text-gray-800">Balance: ${balance}</h3>
              <h3 className="text-lg font-semibold text-gray-700 mt-4 mb-3">Transactions:</h3>
              <ul className="list-disc list-inside space-y-2">
                {transactions.map((transaction) => (
                  <li key={transaction.id} className="text-gray-500">
                    {transaction.description}: <span className={transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}>${transaction.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
