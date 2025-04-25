import React, { ReactNode } from "react";

interface DeliverableItemProps {
  icon: ReactNode;
  platform: string;
  description: string;
}

const DeliverableItem = ({
  icon,
  platform,
  description,
}: DeliverableItemProps) => {
  return (
    <div className="grid grid-cols-12 gap-x-4 mx-auto">
      <div className="col-span-2 flex items-center gap-2">
        <div className="mt-1">{icon}</div>
      </div>

      <p className="col-span-10 mt-1 text-gray-700">{description}</p>
    </div>
  );
};

export default DeliverableItem;
