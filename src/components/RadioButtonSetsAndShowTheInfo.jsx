import { useState } from "react";

const RadioButtonSetsAndShowTheInfo = () => {
  const options = ["cricket", "football", "hockey"];
  const days = ["weekday", "weekend"];
  const [gameName, setGameName] = useState("");
  const [dayType, setDayType] = useState("");

  const setGame = (e) => {
    setGameName(e.target.value);
  };

  const setDay = (e) => {
    setDayType(e.target.value);
  };

  return (
    <div style={{    paddingTop: "15%", paddingLeft: "5%"}}>
      <h1>Which Game ?</h1>
      {options.length > 0 ? (
        <>
          {options.map((game) => (
            <>
              <input
                type="radio"
                name="games"
                value={game}
                onChange={setGame}
              />
              <label>{game}</label> <br />
            </>
          ))}
        </>
      ) : (
        <h3>There is No any game</h3>
      )}

      <h1>Select Days</h1>

      {days.length > 0 ? (
        <>
          {days.map((day) => (
            <>
              <input type="radio" name="days" value={day} onChange={setDay} />
              <label>{day}</label> <br />
            </>
          ))}
        </>
      ) : (
        <h3>There is No any Days</h3>
      )}

      {gameName != "" && dayType != "" ? (
        <>
          <h1>You will play</h1>
          <h3>
            {gameName} on {dayType}
          </h3>
        </>
      ) : gameName == "" ? (
        <h1>Please select game</h1>
      ) : dayType == "" ? (
        <h1>Please select day</h1>
      ) : (
        ""
      )}
    </div>
  );
};

export default RadioButtonSetsAndShowTheInfo;
