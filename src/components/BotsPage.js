import React, {useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [botCollection, setBotCollection] = useState(/* Your collection of bots */);
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

    // Remove the bot from both frontend army and collection
    setEnlistedBots((prevEnlistedBots) => prevEnlistedBots.filter((b) => b.id !== bot.id));
  };

  return (
    <div>
      <YourBotArmy enlistedBots={enlistedBots} onDischarge={dischargeForever} />
      <BotCollection bots={botCollection}
        onAddToArmy={addToArmy}
        onRelease={releaseFromArmy}/>
    </div>
  )
}

export default BotsPage;
