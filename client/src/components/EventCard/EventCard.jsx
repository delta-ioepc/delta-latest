import React, { useState } from "react";
import "./EventCard.css";
import { events } from "../../assets/data/events";
import Button from "../Button/Button";

const EventCard = ({ propTag }) => {
  const [eventList, setEventList] = useState(events);

  const onCardClick = (id) => {
    const newState = [...eventList];
    newState.forEach((item) =>
      item.id === id ? (item.active = true) : (item.active = false)
    );
    setEventList(newState);
  };

  if (!eventList || eventList.length <= 0) return "No events available";

  return (
    <>
      <section className="event-cards">
        {eventList.map((event) => {
          if (event.tag === propTag) {
            return (
              <div
                key={event.id}
                className={`event-card ${event.active && "active"}`}
                style={{ backgroundImage: `url(${event.image})` }}
                onClick={() => onCardClick(event.id)}
              >
                <div className="lower">
                  <h2 className="event-card-title">{event.title}</h2>
                  <Button btnLink={"#"} btnText={"Register"} className="btn" />
                </div>
              </div>
            );
          }
          return null;
        })}
      </section>
    </>
  );
};

export default EventCard;
