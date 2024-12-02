import React, { useState, useEffect } from 'react';

interface Expense {
  amount: number;
  description: string;
  date: string;
  category: string;
}

interface ExpenseLoggerProps {
  onSubmit?: (expenseData: Expense) => void;
  initialCategories?: string[];
}

const ExpenseLogger: React.FC<ExpenseLoggerProps> = ({ 
  onSubmit = () => {}, 
  initialCategories = ['Groceries', 'Transport', 'Entertainment'] 
}) => {
  const [amount, setAmount] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [categories, setCategories] = useState<string[]>(initialCategories);
  const [category, setCategory] = useState<string>('');
  const [newCategory, setNewCategory] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Automatically set current date when component mounts
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setDate(today);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Reset previous messages
    setError(null);
    setSuccess(null);

    // Validate required fields
    if (!amount) {
      setError('Please enter an amount.');
      return;
    }

    if (!category && !newCategory) {
      setError('Please select or create a category.');
      return;
    }

    // Prepare expense data
    const expenseData: Expense = {
      amount: parseFloat(amount),
      description,
      date,
      category: category || newCategory
    };

    try {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update categories if a new one was added
      if (newCategory && !categories.includes(newCategory)) {
        setCategories(prev => [...prev, newCategory]);
      }

      // Success handling
      setSuccess('Expense logged successfully.');

      // Reset form
      setAmount('');
      setDescription('');
      const today = new Date().toISOString().split('T')[0];
      setDate(today);
      setCategory('');
      setNewCategory('');

      // Call onSubmit callback
      onSubmit(expenseData);
    } catch (error) {
      // Error handling
      setError('Failed to log expense. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveCategory = (categoryToRemove: string) => {
    setCategories(prev => prev.filter(cat => cat !== categoryToRemove));
    if (category === categoryToRemove) {
      setCategory('');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Log New Expense</h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Success: </strong>
          <span className="block sm:inline">{success}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add a description (optional)"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <select 
            value={date} 
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={new Date().toISOString().split('T')[0]}>Today</option>
            <option value={(() => {
              const yesterday = new Date();
              yesterday.setDate(yesterday.getDate() - 1);
              return yesterday.toISOString().split('T')[0];
            })()}>
              Yesterday
            </option>
            <option value="">Custom Date</option>
          </select>
          {date === '' && (
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Categories
          </label>
          <div className="flex flex-wrap gap-2 mb-2">
            {categories.map((cat) => (
              <div 
                key={cat} 
                className={`
                  flex items-center px-2 py-1 rounded-full 
                  ${category === cat ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}
                  cursor-pointer
                `}
                onClick={() => setCategory(cat)}
              >
                {cat}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveCategory(cat);
                  }} 
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className="flex">
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Create new category"
              className="flex-grow mr-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => {
                if (newCategory.trim()) {
                  const trimmedCategory = newCategory.trim();
                  if (!categories.includes(trimmedCategory)) {
                    setCategories(prev => [...prev, trimmedCategory]);
                    setCategory(trimmedCategory);
                    setNewCategory('');
                  }
                }
              }}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Add
            </button>
          </div>
        </div>

        <button 
          type="submit"
          className="w-full mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Log Expense'}
        </button>
      </form>
    </div>
  );
};

export default ExpenseLogger;