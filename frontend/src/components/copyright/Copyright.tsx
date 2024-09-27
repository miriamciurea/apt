import React from 'react';
import * as styles from './Copyright.module.css';


const Copyright: React.FC = () => {
  return (
    <div className={styles.termsAndConditions}>
      <h1>Terms and Conditions</h1>
      <p>Last updated: September 18, 2024</p>
      <p>Please read these terms and conditions carefully before using Our Service.</p>

      <h2>Interpretation and Definitions</h2>
      <h3>Interpretation</h3>
      <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

      <h3>Definitions</h3>
      <p>For the purposes of these Terms and Conditions:</p>
      <ul>
        <li>
          <p><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest, or other securities entitled to vote for election of directors or other managing authority.</p>
        </li>
        <li>
          <p><strong>Country</strong> refers to: United Kingdom</p>
        </li>
        <li>
          <p><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to AP Telecommunications Limited, Devonshire House 582 Honeypot Lane, Stanmore, HA7 1JS.</p>
        </li>
        <li>
          <p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone, or a digital tablet.</p>
        </li>
        <li>
          <p><strong>Service</strong> refers to the Website.</p>
        </li>
        <li>
          <p><strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the <a href="https://www.termsfeed.com/terms-conditions-generator/" target="_blank" rel="noopener noreferrer">Terms and Conditions Generator</a>.</p>
        </li>
        <li>
          <p><strong>Third-party Social Media Service</strong> means any services or content (including data, information, products, or services) provided by a third-party that may be displayed, included, or made available by the Service.</p>
        </li>
        <li>
          <p><strong>Website</strong> refers to apt, accessible from <a href="http://www.apt.com" rel="external nofollow noopener" target="_blank">http://www.apt.com</a></p>
        </li>
        <li>
          <p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
        </li>
      </ul>

      {/* Continue with the rest of your terms and conditions content here */}

      <h2>Acknowledgment</h2>
      <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company...</p>

      {/* Add the remaining sections like "Links to Other Websites", "Termination", etc. */}

    </div>
  );
};

export default Copyright;
