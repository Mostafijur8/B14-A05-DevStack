import type { Icard } from "../type/CardType";

interface StackProps {
  selectedCards: Icard[];
  removeFromStack: (id: string) => void;
  removeAll: () => void;
}

const Stack = ({ selectedCards, removeFromStack, removeAll }: StackProps) => {
  return (
    <div>
      <div className="self-start rounded-xl p-5 shadow-[0_4px_20px_rgba(15,23,42,0.08)] lg:min-h-[145px]">
        <div>
          {/* Stack Header */}
          <div>
            <p className="text-2xl font-bold">Your stack</p>

            <p className="text-[12px] text-[#94a3b8]">
              {selectedCards.length === 0
                ? "No technologies selected yet."
                : `${selectedCards.length} technologies selected`}
            </p>
          </div>

          {/* Empty Stack */}
          {selectedCards.length === 0 ? (
            <p className="mt-5 rounded-xl border border-dashed border-slate-200 p-5 text-center text-[#94a3b8]">
              Your stack is empty.
            </p>
          ) : (
            /* Selected Cards */
            <div className="mt-5 flex flex-col gap-3">
              {selectedCards.map((card) => (
                <div
                  key={card.id}
                  className="flex items-center justify-between rounded-xl border border-slate-200 p-3"
                >
                  {/* Icon + Info */}
                  <div className="flex items-center gap-3">
                    <img src={card.icon} alt={card.name} className="h-8 w-8" />

                    <div>
                      <h3 className="font-semibold">{card.name}</h3>

                      <p className="text-[11px] text-[#94a3b8]">
                        {card.category}
                      </p>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromStack(card.id)}
                    className="cursor-pointer text-red-500"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* remove all button */}
          <div className="flex justify-center mt-5">
            {selectedCards.length > 0 && (
              <button
                onClick={removeAll}
                className="cursor-pointer text-[12px] font-semibold text-[#ef4444] hover:text-[#dc2626]"
              >
                Remove All
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
