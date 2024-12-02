import React from "react";

interface Transaction {
  id: number;
  type: string;
  amount: string;
  to?: string;
  from?: string;
}

interface DashboardProps {
  user: {
    name: string;
    balance: string;
    address: string;
  };
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const transactionData: Transaction[] = [
    { id: 1, type: "Sent", amount: "0.05 ETH", to: "0xABCD...1234" },
    { id: 2, type: "Received", amount: "0.10 ETH", from: "0x5678...EFGH" },
    { id: 3, type: "Staked", amount: "0.50 ETH", to: "0xWXYZ...9876" },
  ];

  return (
    <div
      className="flex flex-col lg:flex-row gap-8 p-8"
      style={{
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* User Details Section */}
      <div
        className="bg-white/10 backdrop-blur-md rounded-lg shadow-2xl p-8 flex-1 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <div className="bg-gray-900/30 rounded-md p-4 mb-4">
          <h2 className="text-3xl font-extrabold text-white mb-2 animate__animated animate__fadeIn">
            {user.name}
          </h2>
          <p className="text-gray-300 text-lg">Wallet: {user.address}</p>
        </div>
        <div className="bg-gray-900/30 rounded-md p-4">
          <p className="text-4xl font-bold text-teal-400 animate__animated animate__fadeIn animate__delay-1s">
            {user.balance}
          </p>
          <p className="text-gray-400 text-lg mt-1">Available Balance</p>
        </div>
      </div>

      {/* Transactions Section */}
      <div
        className="bg-white/10 backdrop-blur-md rounded-lg shadow-2xl p-8 flex-1 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <h3 className="text-2xl font-extrabold text-white mb-6">
          Recent Transactions
        </h3>
        <ul className="space-y-4">
          {transactionData.map((tx) => (
            <li
              key={tx.id}
              className="flex justify-between items-center bg-gray-700/50 backdrop-blur-lg rounded-lg p-5 transition-all duration-300 hover:scale-105 hover:bg-gray-700/70 hover:shadow-lg"
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
    </div>
  );
};

export default Dashboard;
