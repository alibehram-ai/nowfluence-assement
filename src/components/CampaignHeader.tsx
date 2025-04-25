
import React from "react";

interface CampaignHeaderProps {
  title: string;
  description: string;
}

const CampaignHeader = ({ title, description }: CampaignHeaderProps) => {
  return (
    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
      <p className="mt-2 text-lg text-gray-700">{description}</p>
    </div>
  );
};

export default CampaignHeader;
