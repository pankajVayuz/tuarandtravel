import React from 'react';

const AdventureExcursionCard = ({ vehicleImage, title, description, price }) => {
  return (
    <div className="bg-white rounded shadow-md p-4">
      <img src={vehicleImage} alt={title} className="w-20 h-20 mb-2 rounded-md" />
      <h3 className="text-xl font-semibold mb-1 whitespace-normal">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {/* <p className="text-blue-500 font-semibold">${price}</p> */}
    </div>
  );
};

export default AdventureExcursionCard;
