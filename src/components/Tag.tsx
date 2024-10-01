interface TagProps {
  children: string;
  bgColor: string;
}

const Tag: React.FC<TagProps> = ({ children, bgColor }) => {
  return (
    <span className="tag" style={{ backgroundColor: bgColor }}>
      <div>{children}</div>
    </span>
  );
};

export default Tag;
