import React, { useState, useEffect } from "react";

function BotCollection({ onAddToArmy }) {
  // Your code here

  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((response) => response.json())
      .then((bots) => {
        setBots(bots);
      })
  }, []);
  const Bot = ({ bot, onAddToArmy }) => (
    <div className="bot-item">
      <img alt="oh no!" src={bot.avatar_url} onClick={() => onAddToArmy(bot)} />
      <br />
      <span className="bott">{bot.name}</span>
      <br />
      <span className="bott">{bot.catchphrase}</span>
      <br />
      <span className="bott">{bot.health}</span>
      <br />
      <span className="bott">{bot.damage}</span>
      <br />
      <span className="bott">{bot.armor}</span>
    </div>
  );

  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <Bot key={bot.id} bot={bot} onAddToArmy={onAddToArmy} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
