import React from "react";

export const Footer = () => {
  return (
    <div className="bg-gray-100 py-6">
      <div className="container mx-auto text-center">
        <div className="text-sm text-gray-600">
          © {new Date().getFullYear()} SimpleJoy Solutions. All rights reserved.
          Photography by Amy Osborne.
        </div>
      </div>
    </div>
  );
};
