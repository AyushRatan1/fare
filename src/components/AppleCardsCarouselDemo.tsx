import React, { useState } from "react";
import { Carousel, Card } from "./apple-cards-carousel"; // Correct named import
import MakePayments from "./ExpenseLogger";
import Split from "./Split";
import Analytics from "./Analytics";

interface CardData {
  title: string;
  onClick: () => void;
}

export function AppleCardsCarouselDemo(): JSX.Element {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCardClick = (feature: string) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFeature(null);
  };

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white dark:text-white font-sans">
       Let's Dive In
      </h2>

      {/* Carousel for displaying the features */}
      <Carousel items={cards(handleCardClick)} />

      {/* Modal for displaying the selected feature */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg w-11/12 max-w-4xl relative">
          <button
  className="absolute top-4 right-4 text-black font-bold text-2xl"
  onClick={closeModal}
  style={{
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '0',
    fontSize: '30px',
    fontWeight: 'bold',
    transition: 'color 0.3s ease, transform 0.2s ease',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.color = '#FF6347'; // Change color on hover
    e.currentTarget.style.transform = 'scale(1.2)'; // Slightly scale the button
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.color = 'black'; // Revert color back to black
    e.currentTarget.style.transform = 'scale(1)'; // Revert scale
  }}
>
  ×
</button>

            <div className="modal-content">
              {/* Render the selected feature component inside the modal */}
              {selectedFeature === "Make Payments" && <MakePayments />}
              {selectedFeature === "Split" && <Split />}
              {selectedFeature === "Analytics" && <Analytics />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const cards = (handleCardClick: (feature: string) => void): JSX.Element[] =>
  [
    {
      title: "Make Payments",
      onClick: () => handleCardClick("Make Payments"),
    },
    {
      title: "Split",
      onClick: () => handleCardClick("Split"),
    },
    {
      title: "Analytics",
      onClick: () => handleCardClick("Analytics"),
    },
  ].map((card, index) => (
    <Card
      key={index}
      heading={card.title}
      renderedElement={<div className={`card-box card-box-${index}`} />}
      onClick={card.onClick}
    />
  ));

export default AppleCardsCarouselDemo;
