import MoreInfo from "./MoreInfo";

interface CardProps {
  children: React.ReactNode;
  title: string;
  // tags: TagT[];
  // tool?: ToolT;
  description: React.ReactNode;
  className?: string;
}

const Card = ({ children, title, description, className }: CardProps) => {
  return (
    <div className={"relative " + className}>
      <div className="min-w-[248px] min-h-[248px] shadow-inner bg-white/5">
        {children}
      </div>
      <div className="w-full flex items-center gap-2 mt-2">
        <h2 className="">{title}</h2>
        <MoreInfo>{description}</MoreInfo>
      </div>
    </div>
  );
};

export default Card;
