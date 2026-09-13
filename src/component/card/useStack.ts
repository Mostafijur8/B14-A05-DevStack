import { useState } from "react";
import type { Icard } from "../type/CardType";

const useStack = () => {
  const [selectedCards, setSelectedCards] = useState<Icard[]>([]);

  // add technology

  const addToStack = (Card: Icard) => {
    const alreadyAdded = selectedCards.some((item) => item.id === Card.id);

    if (alreadyAdded) {
      alert(`${Card.name} already in your stack`);
      return;
    }

    setSelectedCards((prev) => [...prev, Card]);
  };

  //   Remove one technology
  const removeFromStack = (id: string) => {
    setSelectedCards((prev) => prev.filter((item) => item.id !== id));
  };
  //   removeAll
  const removeAll = () => {
    setSelectedCards([]);
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
