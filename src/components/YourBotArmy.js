import React from "react";
import { useState } from "react";

function YourBotArmy({ enlistedBots, onDischarge }) {

  const [botCollection, setBotCollection] = useState("All");
  function handleDeleteBot() {
    setBotCollection(botCollection);
  }
  console.log(onDischarge)

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {enlistedBots.map((bot) => (
            <div key={bot.id} className="bot-item">
              <img alt="oh no!" src={bot.avatar_url} onClick={( ) => onDischarge(bot)} />
              <br />
              <span>{bot.name}</span>
              <br />
              <span>{bot.catchphrase}</span>
              <br />
              <span className="bott">{bot.health}</span>
              <br />
              <span className="bott">{bot.damage}</span>
              <br />
              <span className="bott">{bot.armor}</span>
              <br />
              <button onClick={handleDeleteBot}>X</button>
             
            </div>
          ))}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
