import React, { useState } from "react";
import TicketDisplay from "./components/TicketDisplay";

function App() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [ticket, setTicket] = useState(null);

  // Tamil Nadu major cities
  const cities = [
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Trichy",
    "Salem",
    "Erode",
    "Tiruppur",
    "Vellore",
    "Thanjavur",
    "Tirunelveli",
    "Kanchipuram",
    "Dindigul",
    "Nagercoil",
    "Karur",
    "Sivakasi",
    "Cuddalore",
    "Nagapattinam",
    "Tuticorin",
    "Virudhunagar",
    "Kanyakumari",
    "Tiruvannamalai",
    "Pudukkottai",
    "Sivagangai",
    "Namakkal",
    "Ramanathapuram",
    "Theni",
    "Tirupattur",
    "Tenkasi",
    "Ariyalur",
    "Perambalur",
    "Kallakurichi",
    "Ranipet",
    "Tiruvallur",
    "Thiruvarur",
    "Nagapattinam",
    "Kanchipuram",
    "Tiruvannamalai",
    "Sivagangai",
    "Namakkal",
    "Ramanathapuram",
    "Theni",
    "Tirupattur",
    "Tenkasi",
  ];

  // Approx distances in km (TN major city pairs)
  const distances = {
    Chennai: {
      Coimbatore: 500, Madurai: 460, Trichy: 330, Salem: 340, Vellore: 140,
      Thanjavur: 350, Tirunelveli: 600, Kanchipuram: 75, Dindigul: 420,
      Nagercoil: 700, Cuddalore: 180, Nagapattinam: 320, Tuticorin: 610
    },
    Coimbatore: {
      Chennai: 500, Madurai: 215, Trichy: 220, Salem: 160, Erode: 100,
      Tiruppur: 55, Karur: 125, Dindigul: 220, Tirunelveli: 360, Nagercoil: 400
    },
    Madurai: {
      Chennai: 460, Coimbatore: 215, Trichy: 130, Dindigul: 65, Tirunelveli: 170,
      Nagercoil: 235, Sivakasi: 55, Thanjavur: 190, Tuticorin: 150
    },
    Trichy: {
      Chennai: 330, Coimbatore: 220, Madurai: 130, Salem: 140, Karur: 80,
      Thanjavur: 60, Dindigul: 100, Erode: 160
    },
    Salem: {
      Chennai: 340, Coimbatore: 160, Trichy: 140, Erode: 65, Karur: 120,
      Vellore: 160, Tiruppur: 120
    },
    Erode: {
      Chennai: 400, Coimbatore: 100, Salem: 65, Karur: 60, Tiruppur: 55,
      Dindigul: 160
    },
    Tiruppur: {
      Coimbatore: 55, Erode: 55, Salem: 120, Karur: 100, Chennai: 465
    },
    Vellore: {
      Chennai: 140, Salem: 160, Trichy: 260, Coimbatore: 390
    },
    Thanjavur: {
      Chennai: 350, Trichy: 60, Madurai: 190, Nagapattinam: 90
    },
    Tirunelveli: {
      Chennai: 600, Madurai: 170, Tuticorin: 50, Nagercoil: 85, Coimbatore: 360
    },
    Kanchipuram: {
      Chennai: 75, Vellore: 100, Trichy: 310
    },
    Dindigul: {
      Chennai: 420, Madurai: 65, Coimbatore: 220, Trichy: 100
    },
    Nagercoil: {
      Chennai: 700, Madurai: 235, Tirunelveli: 85, Tuticorin: 130, Coimbatore: 400
    },
    Karur: {
      Trichy: 80, Erode: 60, Salem: 120, Tiruppur: 100, Coimbatore: 125
    },
    Sivakasi: {
      Madurai: 55, Virudhunagar: 20, Tirunelveli: 110
    },
    Cuddalore: {
      Chennai: 180, Trichy: 200, Nagapattinam: 145
    },
    Nagapattinam: {
      Chennai: 320, Thanjavur: 90, Cuddalore: 145
    },
    Tuticorin: {
      Chennai: 610, Madurai: 150, Tirunelveli: 50, Nagercoil: 130
    }
  };

  // Fare calculation: ₹2 per km
  const calculateFare = (from, to) => {
    if (distances[from] && distances[from][to]) {
      return distances[from][to] * 2;
    }
    if (distances[to] && distances[to][from]) {
      return distances[to][from] * 2;
    }
    return 50; // default if distance not defined
  };

  const handleBooking = () => {
    if (!from || !to) {
      alert("Please select both From and To places");
      return;
    }

    if (from === to) {
      alert("From and To cannot be the same place");
      return;
    }

    const fare = calculateFare(from, to);

    const newTicket = {
      from,
      to,
      price: fare,
      date: new Date().toLocaleString(),
      ticketId: Math.floor(Math.random() * 100000),
    };

    setTicket(newTicket);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>🚌 Bus Ticketing System</h1>

      {/* From Dropdown */}
      <div>
        <label>From: </label>
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          <option value="">-- Select City --</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* To Dropdown */}
      <div>
        <label>To: </label>
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="">-- Select City --</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <button
        style={{
          marginTop: "20px",
          background: "blue",
          color: "white",
          padding: "10px 20px",
          fontSize: "16px",
          border: "none",
          cursor: "pointer",
        }}
        onClick={handleBooking}
      >
        Book Ticket
      </button>

      {/* Ticket Display */}
      {ticket && <TicketDisplay ticket={ticket} />}
    </div>
  );
}

export default App;
