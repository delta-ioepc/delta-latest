import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import EventCard from "../../components/EventCard/EventCard";
import "./EventPage.css";

const EventPage = () => {
  return (
    <>
      <Navbar />
      <div className="events-div">
        <div className="main-event">
          <h2 className="event-page-title">Events</h2>
          <EventCard propTag={"Main1"} />
          <EventCard propTag={"Main2"} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventPage;
