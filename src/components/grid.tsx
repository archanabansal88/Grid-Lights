type GridProps = {
  isEmpty: Boolean;
  onClick: () => void;
  selected: boolean;
};

const Grid = ({ isEmpty, onClick, selected }: GridProps) => {
  if (isEmpty) return <div></div>;
  return (
    <div className={selected ? "grid show" : "grid"} onClick={onClick}></div>
  );
};

export default Grid;
