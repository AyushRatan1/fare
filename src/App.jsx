import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import UserCard from "./components/UserCard";
import Transactions from "./components/Transactions";
import Cover from "./components/CoverDemo";
import Floating from "./components/FloatingDockDemo";
import Carousal from "./components/AppleCardsCarouselDemo";
import Card from "./components/CardSpotlightDemo";



const App = () => {
  const userData = {
    name: "Ayush Ratan", // Replace with dynamic user data
    balance: "3.256 ETH", // Example balance
    address: "0x1234...5678", // Example wallet address
  };

  return (
    <>
      <div className="pt-[4.75em] lg:pt-[5.25rem] overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen text-white">
        <Header />
        
        {/* CoinSplit Title */}
        <div className="px-6 md:px-12 mt-8 mb-4 text-center">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-purple-600 animate-text-shadow">
            CoinSplit
          </h1>
        </div>
        <br></br>
    

        {/* User Info Section */}
        <div className="px-6 md:px-12">
          <UserCard user={userData} />
        </div>

        {/* Transactions Section */}
     
        <Cover />
        {/* Other Components */}
        <Carousal />
        
        <Floating />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
