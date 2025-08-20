import React, { useState } from "react";
import TicketForm from "../components/TicketForm";
import TicketDisplay from "../components/TicketDisplay";

function Home() {
  const [ticket, setTicket] = useState(null);

  return (
    <div className="app-container">
      <h1>🚍 Bus Ticketing System</h1>
      {!ticket ? (
        <TicketForm setTicket={setTicket} />
      ) : (
        <TicketDisplay ticket={ticket} />
      )}
    </div>
  );
}
export default Home;
