import { use } from "react";
import type { Icard } from "../type/CardType";
import Stack from "./Stack";
import useStack from "./useStack";

interface cardProps {
  cardPromise: Promise<Icard[]>;
}
const badgeColors: Record<string, string> = {
  Popular: "badge-primary",
  Flexible: "badge-secondary",
  Enterprise: "badge-success",
  Fast: "badge-warning",
  "Top SQL": "badge-accent",
  NoSQL: "badge-primary",
  Reliable: "badge-secondary",
  DevOps: "badge-secondary",
  Trending: "badge-success",
  Essential: "badge-success",
};
const Card = ({ cardPromise }: cardProps) => {
  const cards = use(cardPromise);
  const { selectedCards, addToStack, removeFromStack, removeAll, isAdded } =
    useStack();

  return (
    // card title
    <div>
      <div className="container mx-auto px-5 lg:0 mb-5">
        <h1 className="text-[22px] lg:text-[36px] font-bold">
          Explore the{" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p className="text-[#64748b]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="container mx-auto px-5 lg:px-0 grid grid-cols-1 gap-6 lg:grid-cols-4 mb-10">
        {/* techonlogy card */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3 ">
          {cards.map((card) => {
            const added = isAdded(card.id);
            return (
              <div
                key={card.id}
                className="rounded-xl  p-5 flex flex-col gap-5 shadow-[0_4px_20px_rgba(15,23,42,0.08)]"
              >
                <div className="flex justify-between items-center">
                  <img src={card.icon} alt="" className="h-8 w-8" />
                  <div
                    className={`badge badge-soft  ${badgeColors[card.badge]}`}
                  >
                    {card.badge}
                  </div>
                </div>
                <div className="">
                  <h1 className="font-bold ">{card.name}</h1>
                  <p className="text-[12px] text-[#64748b]">
                    {card.description}
                  </p>
                </div>
                <div>
                  <div className="mb-2 border-t border-slate-200"></div>
                  <div className="flex justify-between items-center text-[11px] ">
                    <span className="rounded-b-sm text-[#64748b] font-semibold bg-slate-100/80 px-5 lg:px-3 ">
                      {card.category}
                    </span>
                    <p className="text-[#64748b] lg:text-[10px]">
                      {card.difficulty}
                    </p>
                    <p>⭐ {card.rating}</p>
                  </div>
                </div>
                <button
                  onClick={() => addToStack(card)}
                  disabled={added}
                  className={`btn rounded-xl ${
                    added
                      ? " text-black"
                      : " cursor-pointer bg-black text-white"
                  }`}
                >
                  {added ? "✓ Added to Stack" : "Add to Stack"}
                </button>
              </div>
            );
          })}
        </div>

        {/* stack */}

        <Stack
          selectedCards={selectedCards}
          removeFromStack={removeFromStack}
          removeAll={removeAll}
        />
      </div>
    </div>
  );
};

export default Card;
