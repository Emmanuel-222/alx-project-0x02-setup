import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  email,
  address: {city},
}) => {
  return (
    <div className="border p-4 rounded shadow-sm bg-white">
      <h2 className="text-lg font-semibold mb-1">{name}</h2>
      <p className="text-gray-600 mb-2">{email}</p>
      <p className="text-sm text-gray-400">Posted by City #{city}</p>
    </div>
  );
};

export default UserCard;