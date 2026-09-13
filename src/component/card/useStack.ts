import { useState } from "react";
import type { Icard } from "../type/CardType";
import { toast } from "react-toastify";

const useStack = () => {
  const [selectedCards, setSelectedCards] = useState<Icard[]>([]);

  // add technology

  const addToStack = (Card: Icard) => {
    const alreadyAdded = selectedCards.some((item) => item.id === Card.id);

    if (alreadyAdded) {
      toast.warning(`${Card.name} already in your stack`);
      return;
    }

    setSelectedCards((prev) => [...prev, Card]);
    toast.success(`${Card.name} is added to stack`);
  };

  // Remove one technology
  const removeFromStack = (id: string) => {
    const cardToRemove = selectedCards.find((item) => item.id === id);

    setSelectedCards((prev) => prev.filter((item) => item.id !== id));

    if (cardToRemove) {
      toast.warning(`${cardToRemove.name} removed from stack`);
    }
  };

  //   removeAll
  const removeAll = () => {
    setSelectedCards([]);
    toast.warning("All technologies removed from stack");
  };
  // Check whether technology is already added
  const isAdded = (id: string) => {
    return selectedCards.some((item) => item.id === id);
  };

  return {
    selectedCards,
    addToStack,
    removeFromStack,
    removeAll,
    isAdded,
  };
};

export default useStack;
