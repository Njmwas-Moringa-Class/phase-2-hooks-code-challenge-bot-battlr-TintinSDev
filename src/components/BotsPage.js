import React, { useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage(deleteBot, bots) {
  //start here with your code for step one
  const [botCollection, setBotCollection] = useState("All");
  const [enlistedBots, setEnlistedBots] = useState([]);

  const addToArmy = (bot) => {
    if (!enlistedBots.find((b) => b.id === bot.id)) {
      setEnlistedBots((prevEnlistedBots) => [...prevEnlistedBots, bot]);
    }
  };

  const releaseFromArmy = (bot) => {
    setEnlistedBots((prevEnlistedBots) => prevEnlistedBots.filter((b) => b.id !== bot.id));
  };

  const dischargeForever = (bot) => {
    // Implement backend deletion logic here...
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => setBotCollection(bot));


    
    // Remove the bot from both frontend army and collection
    
    setEnlistedBots((prevEnlistedBots) => prevEnlistedBots.filter((b) => b.id !== bot.id));
  };

  return (
    <div>
      <YourBotArmy enlistedBots={enlistedBots} onDischarge={dischargeForever} />
      <BotCollection bots={botCollection}
        onAddToArmy={addToArmy}
        onRelease={releaseFromArmy} />
    </div>
  )
}

export default BotsPage;
