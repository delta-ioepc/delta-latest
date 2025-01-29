import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import "./CommitteePage.css";
import { members } from "../../assets/data/members";

const CommitteePage = () => {
  return (
    <>
      <Navbar />

      <div className="member-container">
        <div className="cardBox">
          <h2 className="committee-top">Team Lead</h2>
          <div className="team">
            {members.map((member) => {
              if (member.team === "Lead") {
                return (
                  <div key={member.id}>
                    <Card
                      name={member.name}
                      src={member.src}
                      title={member.title}
                      linkedin={member.linkedin}
                      facebook={member.facebook}
                      instagram={member.instagram}
                      snapchat={member.snapchat}
                      tiktok={member.tiktok}
                      x={member.x}
                      github={member.github}
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        <div className="cardBox">
          <h2 className="committee-header">Correspondent</h2>
          <div className="team">
            {members.map((member) => {
              if (member.team === "Correspondent") {
                return (
                  <div key={member.id}>
                    <Card
                      name={member.name}
                      src={member.src}
                      title={member.title}
                      linkedin={member.linkedin}
                      facebook={member.facebook}
                      instagram={member.instagram}
                      snapchat={member.snapchat}
                      tiktok={member.tiktok}
                      x={member.x}
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        <div className="cardBox">
          <h2 className="committee-header">Technical Team</h2>
          <div className="team">
            {members.map((member) => {
              if (member.team === "Technical") {
                return (
                  <div key={member.id}>
                    <Card
                      name={member.name}
                      src={member.src}
                      title={member.title}
                      linkedin={member.linkedin}
                      facebook={member.facebook}
                      instagram={member.instagram}
                      snapchat={member.snapchat}
                      tiktok={member.tiktok}
                      x={member.x}
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        <div className="cardBox">
          <h2 className="committee-header">Business Team</h2>
          <div className="team">
            {members.map((member) => {
              if (member.team === "Business") {
                return (
                  <div key={member.id}>
                    <Card
                      name={member.name}
                      src={member.src}
                      title={member.title}
                      linkedin={member.linkedin}
                      facebook={member.facebook}
                      instagram={member.instagram}
                      snapchat={member.snapchat}
                      tiktok={member.tiktok}
                      x={member.x}
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        <div className="cardBox">
          <h2 className="committee-header">Exhibition Team</h2>
          <div className="team">
            {members.map((member) => {
              if (member.team === "Exhibition") {
                return (
                  <div key={member.id}>
                    <Card
                      name={member.name}
                      src={member.src}
                      title={member.title}
                      linkedin={member.linkedin}
                      facebook={member.facebook}
                      instagram={member.instagram}
                      snapchat={member.snapchat}
                      tiktok={member.tiktok}
                      x={member.x}
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        <div className="cardBox">
          <h2 className="committee-header">PR and Marketing Team</h2>
          <div className="team">
            {members.map((member) => {
              if (member.team === "PR and Marketing") {
                return (
                  <div key={member.id}>
                    <Card
                      name={member.name}
                      src={member.src}
                      title={member.title}
                      linkedin={member.linkedin}
                      facebook={member.facebook}
                      instagram={member.instagram}
                      snapchat={member.snapchat}
                      tiktok={member.tiktok}
                      x={member.x}
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        <div className="cardBox">
          <h2 className="committee-header">Finance Team</h2>
          <div className="team">
            {members.map((member) => {
              if (member.team === "Finance") {
                return (
                  <div key={member.id}>
                    <Card
                      name={member.name}
                      src={member.src}
                      title={member.title}
                      linkedin={member.linkedin}
                      facebook={member.facebook}
                      instagram={member.instagram}
                      snapchat={member.snapchat}
                      tiktok={member.tiktok}
                      x={member.x}
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        <div className="cardBox">
          <h2 className="committee-header">Graphics Team</h2>
          <div className="team">
            {members.map((member) => {
              if (member.team === "Graphics") {
                return (
                  <div key={member.id}>
                    <Card
                      name={member.name}
                      src={member.src}
                      title={member.title}
                      linkedin={member.linkedin}
                      facebook={member.facebook}
                      instagram={member.instagram}
                      snapchat={member.snapchat}
                      tiktok={member.tiktok}
                      x={member.x}
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CommitteePage;
