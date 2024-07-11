import { SquareCheck } from "lucide-react";
import React from "react";

interface ConfirmationProps {
  showConfirmation: boolean; // Flag to determine if confirmation message should be shown
  product: {
    title: string; //Title of the product to display in the confirmation message
  };
}

export const Confirmation = ({
  showConfirmation,
  product,
}: ConfirmationProps) => {
  return (
    <div
      className={`absolute w-full min-h-20 bg-[#6FCF97] flex items-center px-10 py-3  gap-2 lg:gap-8 lg:justify-center lg:items-center text-[#075227] ${
        showConfirmation ? " animate-fade-in" : "animate-fade-out"
      } `}
    >
      <SquareCheck
        className="fill-[#075227] text-[#6FCF97] hidden lg:block"
        size={32}
      />
      <p className="text-sm font-normal">
        Thank you, {product.title} has been added to your bag
      </p>
    </div>
  );
};
