import { useEffect, useState } from "react";
import StatBox from "../statBox/index";

// Animated progress bar + percentages
function Statistics({ data, total }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setWidth(data ?? 0), 100); // lets the CSS transition animate
    return () => clearTimeout(t);
  }, [data]);

  return (
    <div>
      <div className="statistics">
        <div className="progress-container">
          <div
            role="progressbar"
            aria-label="Pourcentage de votes à gauche"
            aria-valuenow={Math.round(data ?? 0)}
            aria-valuemin="0"
            aria-valuemax="100"
            className="progress"
            style={{ width: `${width}%` }}
          ></div>
        </div>
      </div>
      <StatBox data={data} total={total} />
    </div>
  );
}

export default Statistics;
