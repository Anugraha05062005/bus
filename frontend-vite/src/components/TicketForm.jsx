import React, { useState } from "react";

function TicketForm({ setTicket }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  // Tamil Nadu cities
  const cities = [
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Trichy",
    "Salem",
    "Erode",
    "Tirunelveli",
    "Thoothukudi",
    "Vellore",
    "Thanjavur"
  ];

  // Fare calculation
  const calculateFare = (from, to) => {
    if (!from || !to || from === to) return 0;
    const baseFare = 200;
    const extraFare = Math.abs(cities.indexOf(from) - cities.indexOf(to)) * 50;
    return baseFare + extraFare;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fare = calculateFare(from, to);

    const res = await fetch("http://localhost:5000/api/tickets/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ from, to, fare })
    });

    const data = await res.json();
    setTicket(data);
  };

  return (
    <div
      style={{
        maxWidth: "450px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        background: "#fff"
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#2c3e50" }}>
        🚌 Tamil Nadu Bus Ticketing
      </h2>

      <form onSubmit={handleSubmit}>
        {/* From */}
        <label style={{ fontWeight: "bold" }}>From:</label>
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        >
          <option value="">-- Select City --</option>
          {cities.map((city, idx) => (
            <option key={idx} value={city}>
              {city}
            </option>
          ))}
        </select>

        {/* To */}
        <label style={{ fontWeight: "bold" }}>To:</label>
        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        >
          <option value="">-- Select City --</option>
          {cities.map((city, idx) => (
            <option key={idx} value={city}>
              {city}
            </option>
          ))}
        </select>

        {/* Fare display */}
        {from && to && from !== to && (
          <p
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: "15px",
              color: "#27ae60"
            }}
          >
            Fare: ₹{calculateFare(from, to)}
          </p>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#2980b9",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Book Ticket
        </button>
      </form>
    </div>
  );
}

export default TicketForm;
