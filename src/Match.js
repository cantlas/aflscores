import React, { useState } from "react";
import Team from "./Team";

function Match() {
  const [team1, setTeam1] = useState("Sydney");
  const [team2, setTeam2] = useState("St. Kilda");
  const [current_quarter, setCurrentQuarter] = useState(1);
  const [isFullTime, setIsFullTime] = useState(false);
  const updateQuarter = () => {
    if (current_quarter < 4) {
      setCurrentQuarter(current_quarter + 1);
    } else {
      setIsFullTime(true);
    }
  };

  return (
    <div>
      <Team team={team1} quarter={current_quarter} />
      <Team team={team2} quarter={current_quarter} />
      <button onClick={updateQuarter}>END QUARTER</button>
      {isFullTime ? <div>FULL TIME</div> : <div>QUARTER {current_quarter}</div>}
    </div>
  );
}

export default Match;
