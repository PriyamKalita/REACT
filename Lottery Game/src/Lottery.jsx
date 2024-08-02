import { useState } from "react";
import { genTicket } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n = 3, winCondition }) { // Corrected function signature
  const [ticket, setTicket] = useState(genTicket(n));
  const isWinning = winCondition(ticket); // Corrected winCondition usage

  const buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div>
      <h1>Lottery Game</h1>
      <div className="ticket">
        <Ticket ticket={ticket} />
      </div>
      <br />
      <button onClick={buyTicket}>Buy new Ticket</button>
      <h2>{isWinning && "Congratulations, you win"}</h2>
    </div>
  );
}
