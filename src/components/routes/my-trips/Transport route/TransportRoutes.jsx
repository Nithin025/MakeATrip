import React, { useContext, useEffect } from "react";
import { LogInContext } from "@/Context/LogInContext/Login";

function TransportRoutes() {
  const { trip } = useContext(LogInContext); // ✅ Get trip from context
  const transportation = trip?.tripData?.transportation; // ✅ Get transportation from tripData

  // 🛠️ Debugging: Log trip data
  useEffect(() => {
    console.log("🚀 Full Trip Object:", trip);
    console.log("🚌 Transportation Data:", transportation);
  }, [trip]); // ✅ Log only when trip updates

  // ✅ Check if at least one valid transport mode exists
  const hasValidTransport =
    (transportation?.bus?.routeName || transportation?.bus?.operator) ||
    transportation?.flight?.airline ||
    transportation?.train?.trainNumber;

  if (!hasValidTransport) {
    return <p className="text-center text-lg">No transportation routes available.</p>;
  }

  // ✅ Function to clean and ensure valid booking links
  const getFirstBookingLink = (link, fallback) => {
    if (!link) return fallback; // ✅ Use fallback if no link is available
    const firstLink = link.split(",")[0].trim(); // ✅ Take the first valid link
    return firstLink.startsWith("http") ? firstLink : `https://${firstLink}`; // ✅ Ensure absolute URL
  };

  return (
    <div className="my-5">
      <h2 className="text-center text-3xl font-bold text-primary/80">Transport Options</h2>
      <div className="mt-4 space-y-4">
        
        {/* 🚍 Bus Details */}
        {transportation?.bus?.routeName || transportation?.bus?.operator ? (
          <div className="transport-card border p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">🚌 Bus</h3>
            <p><strong>Route:</strong> {transportation.bus.routeName || "N/A"}</p>
            <p><strong>Operator:</strong> {transportation.bus.operator || "N/A"}</p>
            <p><strong>Duration:</strong> {transportation.bus.duration || "N/A"}</p>
            <p><strong>Price:</strong> {transportation.bus.price || "N/A"}</p>
            <p><strong>Departure:</strong> {transportation.bus.departureTime || "N/A"}</p>
            <p><strong>Arrival:</strong> {transportation.bus.arrivalTime || "N/A"}</p>
            <a
              href={getFirstBookingLink(transportation.bus.bookingLink, "https://www.redbus.in")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Book Bus Ticket
            </a>
          </div>
        ) : null}

        {/* ✈️ Flight Details */}
        {transportation?.flight?.airline ? (
          <div className="transport-card border p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">✈️ Flight</h3>
            <p><strong>Airlines:</strong> {transportation.flight.airline || "N/A"}</p>
            <p><strong>Duration:</strong> {transportation.flight.duration || "N/A"}</p>
            <p><strong>Price:</strong> {transportation.flight.price || "N/A"}</p>
            <p><strong>Departure:</strong> {transportation.flight.departureTime || "N/A"}</p>
            <p><strong>Arrival:</strong> {transportation.flight.arrivalTime || "N/A"}</p>
            <a
              href={getFirstBookingLink(transportation.flight.bookingLink, "https://www.makemytrip.com/flights/")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Book Flight Ticket
            </a>
          </div>
        ) : null}

        {/* 🚆 Train Details */}
        {transportation?.train?.trainNumber ? (
          <div className="transport-card border p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">🚆 Train</h3>
            <p><strong>Train Number:</strong> {transportation.train.trainNumber || "N/A"}</p>
            <p><strong>Duration:</strong> {transportation.train.duration || "N/A"}</p>
            <p><strong>Price:</strong> {transportation.train.price || "N/A"}</p>
            <p><strong>Departure:</strong> {transportation.train.departureTime || "N/A"}</p>
            <p><strong>Arrival:</strong> {transportation.train.arrivalTime || "N/A"}</p>
            <a
              href={getFirstBookingLink(transportation.train.bookingLink, "https://www.irctc.co.in/")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Book Train Ticket
            </a>
          </div>
        ) : null}

      </div>
    </div>
  );
}

export default TransportRoutes;
