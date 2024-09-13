import { TagT, ToolT } from "@/types";
import Image from "next/image";

interface CardProps {
  children: React.ReactNode;
  tags: TagT[];
  tool?: ToolT;
}

const Card = ({ children, tags, tool }: CardProps) => {
  return (
    <div>
      <div className="min-w-[248px] min-h-[248px] shadow-inner bg-white/5">
        {children}
      </div>
      <div className="w-full flex justify-end gap-2 mt-2">
        {tags.map((tag) => (
          <div
            key={tag.name}
            className="tag shadow-md"
          >
            <div>{tag.name}</div>
          </div>
        ))}
        {tool && (
          <div className="flex items-center justify-center text-xs rounded-full aspect-square px-1 shadow-md" style={{ backgroundColor: tool.color }}>
            <Image src={tool.icon} alt={tool.name} width={24} height={24} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
