import { TagT } from "@/types";

interface CardProps {
  children: React.ReactNode;
  component: TagT;
  selector?: TagT;
  tools?: Array<string>;
}

const Card = ({ children, component, selector, tools }: CardProps) => {
  return (
    <div>
      <div className="min-w-[248px] min-h-[248px] shadow-inner bg-white/5 [&_div]:w-full [&_div]:h-full">
        {children}
      </div>
      <div className="w-full flex justify-end gap-2 mt-2">
        <div
          className="tag shadow-md"
          style={{ backgroundColor: component.color }}
        >
          <div>{component.name}</div>
        </div>
        {selector && (
          <div
            className="tag shadow-md"
            style={{ backgroundColor: selector.color }}
          >
            <div className="">{selector.name}</div>
          </div>
        )}
        {tools && tools.length > 0 && (
          <div className="text-xs rounded-full bg-gray-600 aspect-square px-1 shadow-md">
            {tools.join(", ")}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
