import React from 'react';

// Define Card Component
export const Card: React.FC<CardProps> = ({ heading, renderedElement, onClick }) => {
  return (
    <div
      className="card"
      onClick={onClick}
      style={{
        padding: '20px',
        borderRadius: '20px', // Rounder corners
        backgroundColor: '#2a2a2a',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)', // Deeper shadow
        width: '350px', // Card width
        height: '500px', // Making the cards longer (taller)
        margin: '20px',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        overflow: 'hidden', // Ensure the content stays inside
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <h2
        className="card-heading"
        style={{
          fontSize: '28px',
          color: '#fff',
          fontFamily: 'Arial, sans-serif',
          marginBottom: '15px',
          textAlign: 'center',
        }}
      >
        {heading} 🎉
      </h2>
      <div
        className="card-content"
        style={{
          color: '#dcdcdc',
          fontSize: '18px',
          lineHeight: '1.6',
          textAlign: 'center',
          height: '300px', // Added height for image section
          overflow: 'hidden',
        }}
      >
        {renderedElement}
      </div>
      {/* Optional image section */}
      <div
        className="card-image"
        style={{
          height: '150px', // Image height
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '10px',
          backgroundImage: `url(${renderedElement})`, // Use image URL here
        }}
      />
    </div>
  );
};

// Define Carousel Component
export const Carousel: React.FC<{ items: JSX.Element[] }> = ({ items }) => {
  return (
    <div
      className="carousel-container"
      style={{
        display: 'flex',
        overflowX: 'auto',
        padding: '20px',
        gap: '20px',
        justifyContent: 'center',
      }}
    >
      {items}
    </div>
  );
};

// Define Popup Component
export const Popup: React.FC<{ message: string; onClose: () => void }> = ({
  message,
  onClose,
}) => {
  return (
    <div
      className="popup"
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#1f1f1f',
        color: '#fff',
        padding: '40px',
        borderRadius: '25px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
        zIndex: 9999,
        maxWidth: '450px',
        textAlign: 'center',
        fontSize: '20px',
        fontFamily: 'Arial, sans-serif',
        animation: 'fadeIn 0.3s ease-out',
      }}
    >
      <h3 style={{ marginBottom: '25px' }}>{message} 😍</h3>
      <button
        onClick={onClose}
        style={{
          padding: '12px 25px',
          backgroundColor: '#FF6347',
          color: '#fff',
          border: 'none',
          borderRadius: '15px',
          cursor: 'pointer',
          fontSize: '18px',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#FF4500')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FF6347')}
      >
        Close 🚪
      </button>
    </div>
  );
};

// CSS for fade-in animation (optional if not using an external stylesheet)
const styles = `
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

document.head.insertAdjacentHTML('beforeend', `<style>${styles}</style>`);
