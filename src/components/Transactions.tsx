import React from "react";

interface Transaction {
  id: number;
  type: string;
  amount: string;
  to?: string;
  from?: string;
}

interface TransactionsProps {
  userAddress: string;
}

const Transactions: React.FC<TransactionsProps> = ({ userAddress }) => {
  const transactionData: Transaction[] = [
    { id: 1, type: "Sent", amount: "0.05 ETH", to: "0xABCD...1234" },
    { id: 2, type: "Received", amount: "0.10 ETH", from: "0x5678...EFGH" },
    { id: 3, type: "Staked", amount: "0.50 ETH", to: "0xWXYZ...9876" },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-xl p-6">
      <h3 className="text-2xl font-extrabold text-white mb-6">
        Recent Transactions
      </h3>
      <ul className="space-y-4">
        {transactionData.map((tx) => (
          <li
            key={tx.id}
            className="flex justify-between items-center bg-gray-700/50 backdrop-blur-lg rounded-lg p-5 transition-transform transform hover:scale-105 hover:bg-gray-700/70"
          >
            <div>
              <p className="font-bold text-lg text-white">{tx.type}</p>
              <p className="text-sm text-gray-400">
                {tx.to ? `To: ${tx.to}` : `From: ${tx.from}`}
              </p>
            </div>
            <p className="text-teal-400 font-semibold text-lg">{tx.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
