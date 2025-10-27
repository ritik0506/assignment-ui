import React, { useState } from "react";
import "./ProfileSection.css";

const ProfileSection = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <p>
            Hello! I'm Dave, your sales rep here from Salesforce. I've been
            working at this awesome company for 3 years now.
            <br />
            <br />
            I was born and raised in Albany, NY & have been living in Santa
            Carla for the past 10 years with my wife Tiffany and my 4-year-old
            twin daughters—Emma and Ella.
          </p>
        );
      case "experiences":
        return (
          <p>
            My experiences include sales management, customer relations, and CRM
            strategy. I have also led multiple regional campaigns across the US.
          </p>
        );
      case "recommended":
        return (
          <p>
            Clients often recommend me for my communication, strategic thinking,
            and attention to detail in every project.
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="card-wrapper profile-wrapper">
      <aside className="card-sidebar">
        <div className="sidebar-icon">?</div>
        <div className="sidebar-icon sidebar-icon-grid" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </aside>

      <div className="profile-section">
        <div className="profile-header">
          <div className="tab-buttons">
            <button
              className={activeTab === "about" ? "active" : ""}
              onClick={() => setActiveTab("about")}
            >
              About Me
            </button>
            <button
              className={activeTab === "experiences" ? "active" : ""}
              onClick={() => setActiveTab("experiences")}
            >
              Experiences
            </button>
            <button
              className={activeTab === "recommended" ? "active" : ""}
              onClick={() => setActiveTab("recommended")}
            >
              Recommended
            </button>
          </div>
        </div>

        <div className="tab-content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default ProfileSection;
