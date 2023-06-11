import React, { useState } from "react";

function TeamScore(props) {
  console.log(props);
  const [team, setTeam] = useState(props.team);
  const [total_score, setTotalScore] = useState([0, 0]);
  const [q1_score, setQ1Score] = useState([0, 0]);
  const [q2_score, setQ2Score] = useState([0, 0]);
  const [q3_score, setQ3Score] = useState([0, 0]);
  const [q4_score, setQ4Score] = useState([0, 0]);

  const addGoal = () => {
    switch (props.quarter) {
      case 1:
        setQ1Score([q1_score[0] + 1, q1_score[1]]);
        break;
      case 2:
        setQ2Score([q2_score[0] + 1, q2_score[1]]);
        break;
      case 3:
        setQ3Score([q3_score[0] + 1, q3_score[1]]);
        break;
      case 4:
        setQ4Score([q4_score[0] + 1, q4_score[1]]);
        break;
      default:
        console.err("Something went wrong.");
    }
    setTotalScore([total_score[0] + 1, total_score[1]]);
  };

  const addBehind = () => {
    switch (props.quarter) {
      case 1:
        setQ1Score([q1_score[0], q1_score[1] + 1]);
        break;
      case 2:
        setQ2Score([q2_score[0], q2_score[1] + 1]);
        break;
      case 3:
        setQ3Score([q3_score[0], q3_score[1] + 1]);
        break;
      case 4:
        setQ4Score([q4_score[0], q4_score[1] + 1]);
        break;
      default:
        console.err("Something went wrong.");
    }
    setTotalScore([total_score[0], total_score[1] + 1]);
  };

  return (
    <div>
      <h1>{team}</h1>
      <div className="total">{total_score[0] * 6 + total_score[1]}</div>
      <div>
        {total_score[0]}.{total_score[1]}
      </div>
      <button onClick={addGoal}>+ Goal</button>
      <button onClick={addBehind}>+ Behind</button>
      <div>
        Q1 {q1_score[0]} {q1_score[1]} {q1_score[0] * 6 + q1_score[1]} <br />
        Q2 {q2_score[0]} {q2_score[1]} {q2_score[0] * 6 + q2_score[1]} <br />
        Q3 {q3_score[0]} {q3_score[1]} {q3_score[0] * 6 + q3_score[1]} <br />
        Q4 {q4_score[0]} {q4_score[1]} {q4_score[0] * 6 + q4_score[1]} <br />
      </div>
    </div>
  );
}

export default TeamScore;
