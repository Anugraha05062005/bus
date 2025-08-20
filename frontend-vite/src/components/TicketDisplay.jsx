import React from "react";
import { QRCodeCanvas } from "qrcode.react";  // ✅ Correct import
import jsPDF from "jspdf";

function TicketDisplay({ ticket }) {
  if (!ticket) return null;

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("🚌 Digital Bus Ticket", 20, 20);
    doc.text(`From: ${ticket.from}`, 20, 40);
    doc.text(`To: ${ticket.to}`, 20, 50);
    doc.text(`Fare: ₹${ticket.fare}`, 20, 60);
    doc.text(`Status: ${ticket.status}`, 20, 70);
    doc.text(`Date: ${ticket.date}`, 20, 80);
    doc.save("bus_ticket.pdf");
  };

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        border: "2px solid #333",
        borderRadius: "10px",
        width: "350px",
        backgroundColor: "#f9f9f9"
      }}
    >
      <h2>🎟 Digital Bus Ticket</h2>
      <p><strong>From:</strong> {ticket.from}</p>
      <p><strong>To:</strong> {ticket.to}</p>
      <p><strong>Fare:</strong> ₹{ticket.fare}</p>
      <p><strong>Status:</strong> {ticket.status}</p>
      <p><strong>Date:</strong> {ticket.date}</p>

      <p>✅ Show this QR code while boarding</p>
      <QRCodeCanvas value={JSON.stringify(ticket)} size={120} /> {/* ✅ QR */}

      <br /><br />
      <button
        onClick={downloadPDF}
        style={{
          padding: "10px 20px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        ⬇️ Download Ticket (PDF)
      </button>
    </div>
  );
}

export default TicketDisplay;
