import { useState } from "react";
import Grid from "./grid";
import "./grid.css";

const GridContainer = () => {
  const [selectedIndices, setSelectedIndices] = useState<Array<number>>([]);

  const handleReset = () => {
    const reset = setInterval(() => {
      setSelectedIndices((prev) => {
        if (prev.length === 0) {
          clearInterval(reset);
        }
        return prev.slice(0, prev.length - 1);
      });
    }, 1000);
  };

  const handleClick = (i: number) => {
    if (selectedIndices.includes(i)) {
      setSelectedIndices(selectedIndices.filter((val) => val !== i));
    } else {
      const updatedIndices = [...selectedIndices, i];
      setSelectedIndices(updatedIndices);
      if (updatedIndices.length === 7) {
        handleReset();
      }
    }
  };

  return (
    <div className="grid-container">
      {[...Array(9)].map((_, index) => (
        <Grid
          key={index}
          isEmpty={[4, 5].includes(index)}
          onClick={() => handleClick(index)}
          selected={selectedIndices.includes(index)}
        />
      ))}
    </div>
  );
};
export default GridContainer;
