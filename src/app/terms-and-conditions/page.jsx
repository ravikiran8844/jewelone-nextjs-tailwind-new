import React from "react";
import Navbar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import "../privacy-policy/privacy-policy.css";
import Link from "next/link";
import Header from "../components/Header";

export const metadata = {
  title: "Terms and Conditions - JewelOne",
  description: "JewelOne Terms and Conditions",
};

const page = () => {
  return (
    <main className="privacy-policy">
      <Header/>
      <section className="container py-5">
        <div className="tab-content">
          <h1>
            <strong>Terms and Conditions</strong>
          </h1>
          <p>Last updated: December 04, 2024</p>
          <p>
            Please read these terms and conditions carefully before using Our
            Service.
          </p>
          <h2>
            <strong>Interpretation and Definitions</strong>
          </h2>
          <h3>
            <strong>Interpretation</strong>
          </h3>
          <p>
            The words of which the initial letter is capitalised have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear
            singular or plural.
          </p>
          <h3>
            <strong>Definitions</strong>
          </h3>
          <p>For these Terms and Conditions:</p>
          <ul>
            <li>
              <strong>Affiliate</strong> means an entity that controls, is
              controlled by or is under common control with a party, where
              "control" means ownership of 50% or more of the shares, equity
              interest or other securities entitled to vote for the election of
              directors or other managing authority.
            </li>
            <li>
              <strong>Country</strong> refers to: Tamil Nadu, India
            </li>
            <li>
              <strong>Company</strong> (referred to as either "the Company",
              "We", "Us" or "Our" in this Agreement) refers to Jewel One -
              Corporate Office, 230, East Thiruvenkataswamy Road, R.S Puram,
              Coimbatore - 641001.
            </li>
            <li>
              <strong>Device</strong> means any device that can access the
              Service such as a computer, a cellphone or a digital tablet.
            </li>
            <li>
              <strong>Service</strong> refers to the Website.
            </li>
            <li>
              <strong>Terms and Conditions</strong> (also referred to as
              "Terms") mean these Terms and Conditions that form the entire
              agreement between You and the Company regarding using the
              Service.&nbsp;
            </li>
            <li>
              <strong>Third-party Social Media Service</strong> means any
              services or content (including data, information, products or
              services) provided by a third party that may be displayed,
              included or made available by the Service.
            </li>
            <li>
              <strong>The website</strong> refers to Jewel One, accessible from{" "}
              <a href="https://jewelone.in/">https://jewelone.in/</a>
            </li>
            <li>
              <strong>You</strong> means the individual accessing or using the
              Service, or the company, or other legal entity on behalf of which
              such individual is accessing or using the Service, as applicable.
            </li>
          </ul>
          <h2>
            <strong>Acknowledgement</strong>
          </h2>
          <p>
            These are the Terms and Conditions governing the use of this Service
            and the agreement that operates between You and the Company. These
            Terms and Conditions set out the rights and obligations of all users
            regarding the use of the Service.
          </p>
          <p>
            Your access to and use of the Service is conditioned on Your
            acceptance of and compliance with these Terms and Conditions. These
            Terms and Conditions apply to all visitors, users and others who
            access or use the Service.
          </p>
          <p>
            By accessing or using the Service You agree to be bound by these
            Terms and Conditions. If You disagree with any part of these Terms
            and Conditions then You may not access the Service.
          </p>
          <p>
            You represent that you are over the age of 18. The Company does not
            permit those under 18 to use the Service.
          </p>
          <p>
            Your access to and use of the Service is also conditioned on Your
            acceptance of and compliance with the Privacy Policy of the Company.
            Our Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your personal information when You
            use the Application or the Website and tells You about Your privacy
            rights and how the law protects You. Please read Our Privacy Policy
            carefully before using Our Service.
          </p>
          <h2>
            <strong>Links to Other Websites</strong>
          </h2>
          <p>
            Our Service may contain links to third-party websites or services
            that are not owned or controlled by the Company.
          </p>
          <p>
            The Company has no control over and assumes no responsibility for,
            the content, privacy policies, or practices of any third-party
            websites or services. You further acknowledge and agree that the
            Company shall not be responsible or liable, directly or indirectly,
            for any damage or loss caused or alleged to be caused by or in
            connection with the use of or reliance on any such content, goods or
            services available on or through any such web sites or services.
          </p>
          <p>
            We strongly advise You to read the terms and conditions and privacy
            policies of any third-party web sites or services that You visit.
          </p>
          <h2>
            <strong>Termination</strong>
          </h2>
          <p>
            We may terminate or suspend Your access immediately, without prior
            notice or liability, for any reason whatsoever, including without
            limitation if You breach these Terms and Conditions.
          </p>
          <p>
            Upon termination, Your right to use the Service will cease
            immediately.
          </p>
          <h2>
            <strong>Limitation of Liability</strong>
          </h2>
          <p>
            To the maximum extent permitted by applicable law, in no event shall
            the Company or its suppliers be liable for any special, incidental,
            indirect, or consequential damages whatsoever (including, but not
            limited to, damages for loss of profits, loss of data or other
            information, for business interruption, for personal injury, loss of
            privacy arising out of or in any way related to the use of or
            inability to use the Service, third-party software and/or
            third-party hardware used with the Service, or otherwise in
            connection with any provision of this Terms), even if the Company or
            any supplier has been advised of the possibility of such damages and
            even if the remedy fails of its essential purpose.
          </p>
          <p>
            Some states do not allow the exclusion of implied warranties or
            limitation of liability for incidental or consequential damages,
            which means that some of the above limitations may not apply. In
            these states, each party's liability will be limited to the greatest
            extent permitted by law.
          </p>
          <h2>
            <strong>Disclaimer</strong>
          </h2>
          <p>
            The Service is provided to You "AS IS" and "AS AVAILABLE" and with
            all faults and defects without warranty of any kind. To the maximum
            extent permitted under applicable law, the Company, on its behalf
            and behalf of its Affiliates and their respective licensors and
            service providers, expressly disclaims all warranties, whether
            express, implied, statutory or otherwise, concerning the Service,
            including all implied warranties of merchantability, fitness for a
            particular purpose, title and non-infringement, and warranties that
            may arise out of course of dealing, course of performance, usage or
            trade practice. Without limitation to the foregoing, the Company
            provides no warranty or undertaking, and makes no representation of
            any kind that the Service will meet Your requirements, achieve any
            intended results, be compatible or work with any other software,
            applications, systems or services, operate without interruption,
            meet any performance or reliability standards or be error-free or
            that any errors or defects can or will be corrected.
          </p>
          <p>
            Without limiting the foregoing, neither the Company nor any of the
            Company's providers makes any representation or warranty of any
            kind, express or implied: (i) as to the operation or availability of
            the Service, or the information, content, and materials or products
            included thereon; (ii) that the Service will be uninterrupted or
            error-free; (iii) as to the accuracy, reliability, or currency of
            any information or content provided through the Service; or (iv)
            that the Service, its servers, the content, or e-mails sent from or
            on behalf of the Company are free of viruses, scripts, trojan
            horses, worms, malware, timebombs or other harmful components.
          </p>
          <p>
            Some jurisdictions do not allow the exclusion of certain types of
            warranties or limitations on applicable statutory rights of a
            consumer, so some or all of the above exclusions and limitations may
            not apply to You. But in such a case the exclusions and limitations
            outlined in this section shall be applied to the greatest extent
            enforceable under applicable law.
          </p>
          <h2>
            <strong>Governing Law</strong>
          </h2>
          <p>
            The laws of the Country, excluding its conflicts of law rules, shall
            govern these Terms and Your use of the Service. Your use of the
            Application may also be subject to other local, state, national, or
            international laws.
          </p>
          <h2>
            <strong>Disputes Resolution</strong>
          </h2>
          <p>
            If You have any concerns or disputes about the Service, You agree to
            first try to resolve the dispute informally by contacting the
            Company.
          </p>
          <h2>
            <strong>Severability and Waiver</strong>
          </h2>
          <h3>
            <strong>Severability</strong>
          </h3>
          <p>
            If any provision of these Terms is held to be unenforceable or
            invalid, such provision will be changed and interpreted to
            accomplish the objectives of such provision to the greatest extent
            possible under applicable law and the remaining provisions will
            continue in full force and effect.
          </p>
          <h3>
            <strong>Waiver</strong>
          </h3>
          <p>
            Except as provided herein, the failure to exercise a right or to
            require performance of an obligation under these Terms shall not
            affect a party's ability to exercise such right or require such
            performance at any time thereafter nor shall the waiver of a breach
            constitute a waiver of any subsequent breach.
          </p>
          <h2>
            <strong>Translation Interpretation</strong>
          </h2>
          <p>
            These Terms and Conditions may have been translated if We have made
            them available to You on our Service. You agree that the original
            English text shall prevail in the case of a dispute.
          </p>
          <h2>
            <strong>Changes to These Terms and Conditions</strong>
          </h2>
          <p>
            We reserve the right, at Our sole discretion, to modify or replace
            these Terms at any time. If a revision is material We will make
            reasonable efforts to provide at least 30 days' notice before any
            new terms take effect. What constitutes a material change will be
            determined at Our sole discretion.
          </p>
          <p>
            By continuing to access or use Our Service after those revisions
            become effective, You agree to be bound by the revised terms. If You
            do not agree to the new terms, in whole or in part, please stop
            using the website and the Service.
          </p>
          <h2>
            <strong>Contact Us</strong>
          </h2>
          <p>
            If you have any questions about these Terms and Conditions, You can
            contact us:
          </p>
          <ul>
            <li>
              By visiting this page on our website:{" "}
              <Link href="https://jewelone.in/contact-us">
                https://jewelone.in/contact-us
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default page;
