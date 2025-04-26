// src/components/DataDeletionInstructions.js

import React from "react";
import Footer from "@/components/Footer"; // Assuming you already have Footer component
import Navbar from "@/components/Navbar"; // Assuming you already have Navbar component
import "../styles/PrivacyPolicy.css"; // Assuming you will add the custom styles

const DeleteData = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="privacy-policy-section pt-28 pb-16 md:pt-36 md:pb-24">
        <h1>Data Deletion Instructions</h1>
        <p>Last updated: April 25, 2025</p>

        <p>
          We take your privacy seriously, and we respect your right to delete
          your personal data. If you would like to delete your account and all
          personal data associated with it, please follow the steps below.
        </p>

        <h2>How to Request Data Deletion</h2>
        <p>
          To request the deletion of your personal data, please email us with
          the following information:
        </p>
        <ul>
          <li>Your full name</li>
          <li>Your contact email</li>
        </ul>
        <p>
          You can email us at{" "}
          <a href="mailto:marketing.dil@dilfoods.in">
            marketing.dil@dilfoods.in
          </a>{" "}
          with the subject "Request for Data Deletion" and include the required
          information in your message.
        </p>

        <h2>Important Notes:</h2>
        <ul>
          <li>Data deletion requests will be processed within 30 days.</li>
          <li>
            Once your request is processed, all your personal data will be
            permanently removed from our systems.
          </li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns, please feel free to reach out:
        </p>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:marketing.dil@dilfoods.in">
              marketing.dil@dilfoods.in
            </a>
          </li>
          <li>
            Website:{" "}
            <a
              href="https://www.dilfoods.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.dilfoods.in
            </a>
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default DeleteData;
