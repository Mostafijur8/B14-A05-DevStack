import { useState } from "react";
import type { Icard } from "../type/CardType";
import { toast } from "react-toastify";
import Card from "./Card";

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

  //   Remove one technology
  const removeFromStack = (id: string) => {
    setSelectedCards((prev) => prev.filter((item) => item.id !== id));
    if (Card) {
      toast.warning(`${Card.name} removed from stack`);
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
