import cn from "classnames";
import { Minus, Plus } from "lucide-react";

interface CounterProps {
  count: number;
  className?: string;

  handlePlusAction: () => void;
  handleMinusAction: () => void;
}

export function Counter({ count, className, handlePlusAction, handleMinusAction }: CounterProps) {
  return (
    <div
      className={cn(
        "w-[96px] p-1 flex justify-around items-center border border-solid border-[var(--border-grey)] rounded-[10px]",
        className
      )}
    >
      <Minus size={20} color="#ffffff95" onClick={handleMinusAction} />
      <p>{count}</p>
      <Plus size={20} color="#ffffff95" onClick={handlePlusAction} />
    </div>
  );
}
