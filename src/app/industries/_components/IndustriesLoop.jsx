"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import PlansButton from "@/components/PlansButton";

const IndustriesLoop = () => {
  const industries = [
    {
      name: "FINANCE",
      benefits:
        "<p>Automated calls help reach a broad customer base quickly. AI-driven filtering identifies interested prospects, saving time and resources.</p>",
      cases: `
        <ul>
          <li>Loan offers</li>
          <li>Credit card promotions</li>
          <li>Insurance policy sales</li>
        </ul>
      `,
      img: "/images/industries/item1.svg",
    },
    {
      name: "REAL ESTATE",
      benefits:
        "<p>Schedule property tours via callback scheduling and transfer serious buyers to agents in real-time.</p>",
      cases: `
        <ul>
          <li>Residential or commercial property listings</li>
          <li>Rental promotions</li>
        </ul>
      `,
      img: "/images/industries/item2.svg",
    },
    {
      name: "EDUCATION ＆ E-LEARNING",
      benefits:
        "<p>Automate follow-ups for prospective students and gather quick feedback with AI-powered calls.</p>",
      cases: `
        <ul>
          <li>Course enrollments</li>
          <li>Workshop promotions</li>
          <li>Online tutoring</li>
        </ul>
      `,
      img: "/images/industries/item3.svg",
    },
    {
      name: "HEALTHCARE & WELLNESS",
      benefits:
        "<p>Efficiently manage appointment reminders and wellness program outreach.</p>",
      cases: `
        <ul>
          <li>Clinic or hospital calls</li>
          <li>Fitness center memberships</li>
          <li>Telehealth services</li>
        </ul>
      `,
      img: "/images/industries/item4.svg",
    },
    {
      name: "TECHNOLOGY & SAAS",
      benefits:
        "<p>Fast outreach for trials, demos, and subscription renewals. Data-driven insights help prioritize high-potential leads.</p>",
      cases: `
        <ul>
          <li>Software product launches</li>
          <li>Feature upgrades</li>
          <li>Upselling subscriptions</li>
        </ul>
      `,
      img: "/images/industries/item5.svg",
    },
    {
      name: "E-COMMERCE",
      benefits:
        "<p>Re-engage abandoned carts, upsell promotions, and gather instant feedback on product interests.</p>",
      cases: `
        <ul>
          <li>Seasonal or flash sales</li>
          <li>Loyalty programs</li>
          <li>Cross-selling</li>
        </ul>
      `,
      img: "/images/industries/item6.svg",
    },
    {
      name: "HOSPITALITY & TRAVELLING",
      benefits:
        "<p>AI-driven outreach for travel packages and event bookings. Transfer calls in real time to reservation managers.</p>",
      cases: `
        <ul>
          <li>Vacation packages</li>
          <li>Hotel reservations</li>
          <li>Group tours</li>
        </ul>
      `,
      img: "/images/industries/item7.svg",
    },
    {
      name: "AUTOMOTIVE",
      benefits:
        "<p>Qualify serious buyers, schedule test drives, and follow up on service appointments.</p>",
      cases: `
        <ul>
          <li>New or used vehicle promotions</li>
          <li>Financing options</li>
          <li>Service reminders</li>
        </ul>
      `,
      img: "/images/industries/item8.svg",
    },
    {
      name: "TELECOMMUNICATIONS",
      benefits:
        "<p>Streamline customer acquisition for phone and internet plans. Callback scheduling for upgrade requests.</p>",
      cases: `
        <ul>
          <li>Plan renewals</li>
          <li>Bundled package offers</li>
          <li>Technical support callbacks</li>
        </ul>
      `,
      img: "/images/industries/item9.svg",
    },
    {
      name: "HOME SERVICES",
      benefits:
        "<p>Automate lead engagement for maintenance, repair, and cleaning services. Filter out uninterested leads to focus on high-potential clients.</p>",
      cases: `
        <ul>
          <li>HVAC maintenance</li>
          <li>Cleaning services</li>
          <li>Renovation projects</li>
        </ul>
      `,
      img: "/images/industries/item10.svg",
    },
  ];
  

  return (
    <section className="industries-loop">
      {/* <img src="/images/home/ellipse2.png" />
      <img src="/images/home/ellipse3.png" /> */}
      <div className="_container">
        <div className="industries-loop__body">
          <div className="wrap">
            {industries.map((industry, index) => (
              <div className="item" key={index}>
                <img src="/images/industries/ellipse.png" />
                <img src={industry.img} />
                
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="top"
                >
                  <h2>{industry.name}</h2>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="bottom"
                >
                  <div>
                    <h4>Key Benefits</h4>
                    <div
                      dangerouslySetInnerHTML={{ __html: industry.benefits }}
                    />
                  </div>
                  <div>
                    <h4>Use Cases</h4>
                    <div dangerouslySetInnerHTML={{ __html: industry.cases }} />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesLoop;
