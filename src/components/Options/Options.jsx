import React from "react";
import styles from "./Option.module.css";

const Option = ({ updateFeedback, totalFeedback }) => {
  const resetFeedback = () => {
    localStorage.removeItem("feedback");
    window.location.reload();
  };

  return (
    <div className={styles.option}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};

export default Option;
