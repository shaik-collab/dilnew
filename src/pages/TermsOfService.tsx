import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "../styles/termsOfService.css";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="terms-of-service-section pt-28 pb-16 md:pt-36 md:pb-24">
        <h1>Terms of Service</h1>
        <p>Last updated: April 25, 2025</p>

        <p>
          Welcome to [Your Company Name]! By using our service, including any
          related services, APIs, or webhooks (collectively, the "Service"), you
          agree to the following Terms of Service. Please read these terms
          carefully before using our Service. If you do not agree with these
          terms, you should not use the Service.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the Service, you agree to be bound by these
          Terms and our Privacy Policy. If you are using the Service on behalf
          of a company or other legal entity, you represent and warrant that you
          have the authority to bind that entity to these Terms.
        </p>

        <h2>2. Webhooks and Integration with Facebook</h2>
        <p>
          The Service allows you to integrate with Facebook Webhooks. This
          integration allows us to send and receive data between your
          application and Facebook. By connecting to Facebook via our Service,
          you agree to abide by Facebook's Developer Policies and ensure that
          your use of the webhooks is compliant with all relevant laws and
          regulations.
        </p>
        <h3>What We Do with Your Data:</h3>
        <ul>
          <li>
            Your personal data and any information received through Facebook
            Webhooks are only used to provide and improve the Service.
          </li>
          <li>
            We will never share or sell your personal data without your consent.
          </li>
        </ul>

        <h3>Your Responsibilities:</h3>
        <ul>
          <li>
            Ensure your integration with Facebook Webhooks is correctly
            configured.
          </li>
          <li>
            Ensure compliance with Facebook’s terms of service and privacy
            policy, including managing user data appropriately.
          </li>
          <li>
            You must maintain the security of your webhook integration and
            prevent unauthorized access.
          </li>
        </ul>

        <h2>3. Service Availability</h2>
        <p>
          We strive to provide reliable and efficient service, but we do not
          guarantee 100% uptime or uninterrupted service. Our Service may
          occasionally experience downtime due to technical issues, maintenance,
          or unforeseen circumstances.
        </p>

        <h2>4. Account Security</h2>
        <p>
          You are responsible for maintaining the security and confidentiality
          of your account, including login credentials, API keys, and webhook
          configuration. If you suspect any unauthorized activity, you must
          notify us immediately.
        </p>

        <h2>5. Termination of Access</h2>
        <p>
          We may suspend or terminate your access to the Service if you violate
          these Terms or engage in any unlawful, harmful, or disruptive
          activity. You may also terminate your use of the Service at any time
          by discontinuing use of our APIs or webhook integration.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by applicable law, [Your Company Name]
          shall not be liable for any direct, indirect, incidental, special,
          consequential, or punitive damages arising from your use or inability
          to use the Service, even if we have been advised of the possibility of
          such damages.
        </p>

        <h2>7. Indemnity</h2>
        <p>
          You agree to indemnify, defend, and hold harmless [Your Company Name],
          its affiliates, officers, agents, and employees from any claims,
          damages, liabilities, or expenses (including reasonable attorneys'
          fees) arising from:
        </p>
        <ul>
          <li>Your use of the Service</li>
          <li>Your violation of these Terms</li>
          <li>
            Your violation of any law or third-party rights, including
            Facebook's policies and user data protection.
          </li>
        </ul>

        <h2>8. Updates to Terms</h2>
        <p>
          We may update these Terms of Service from time to time. Any changes
          will be posted on this page, and the "Last updated" date at the top
          will be updated. By continuing to use the Service after such changes,
          you agree to the updated Terms.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of [Your Country/State], without regard to its conflict of law
          principles. Any legal action or proceeding under these Terms shall
          take place in the courts located in [Your Jurisdiction].
        </p>

        <h2>10. Contact Us</h2>
        <p>
          If you have any questions or concerns about these Terms of Service,
          please contact us at:
        </p>
        <ul>
          <li>By email: marketing.dil@dilfoods.in</li>
          <li>
            By visiting this page on our website:{" "}
            <a href="https://dilfoods.in" target="_blank">
              www.diloods.in
            </a>
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default TermsOfService;
