"use client";
import React, { useState } from "react";
import Image from "next/image";

const plans = [
  {
    name: "PLAN 1",
    image: "/images/plan1.jpg", // replace with your image path
    heading: "Gold Ornaments Purchase Advance Scheme (GOPAS)",
    subHeading: "Grammage Accumulation",
    description:
      "A customer can select any Jewellery design of Her/His choice and place an order. Customer can pay the estimated order value in installments at regular monthly basis as per His/Her convenience. On or before the end of every month, as 11 Equated Monthly Advance (EMA).",
    terms: [
      {
        title: "A. VA WAIVER",
        content:
          "On maturity, “Gold Jewellery & Gold Coin” can be purchased in this scheme with a waiver of up to 18% VA (Value Addition) or on actuals, whichever is lower.",
      },
      {
        title: "B. NO. OF ADVANCE PAYMENTS",
        content: "11 Equated Monthly advances.",
      },
      {
        title: "C. TENURE",
        content: "330 days.",
      },
      {
        title: "D. MINIMUM MONTHLY ADVANCE",
        content:
          "Rs. 2000 per month and in multiples of Rs.1000 i.e., Rs.2000, Rs.3000",
      },
      {
        title: "E. GOLD RATE",
        content:
          "1. The EMA paid by the customer will be converted from ‘amount’ to ‘gold weight’. The prevailing Gold Rate for the day will be applicable at the time of EMA payment.\n2. When customers pay their EMA using Virtual Account, Cheque or any Online payment mode, prevailing gold rate at the time of payment realization in the company bank accounts, will be applicable.",
      },
      {
        title: "F. SWARNA SAKTHI ORDER REDEMPTION",
        content:
          "At the end of the 330 days (i.e., joining date + 329 days). Example: A customer joins Swarna Sakthi on 15th January → 329 days i.e., 10th December of the same year will be the redemption date.",
      },
      {
        title: "G. MATURITY",
        content:
          "Maturity is on completion of the 330 days and this tenure of 330 days cannot be extended under any circumstances.",
      },
      {
        title: "H. REFUND",
        content:
          "Refund is not permitted in this plan under any circumstances as EMA is converted to gold weight at the time of payment itself.",
      },
      {
        title: "I. GST & OTHER LEVIES",
        content:
          "GST & other Levies will be charged extra as per government norms.",
      },
      {
        title: "J. ELIGIBILITY",
        content:
          "Waiver of upto 18% VA will be given only if EMA payments are paid continuously without any default.",
      },
      {
        title: "K. AFTER-MATURITY BENEFITS",
        content:
          "In case of default, eligible benefit will be based on the number of EMAs (complete minimum period of 90 days). Customer will get benefit of 1% VA for each EMA paid month. Customer can avail maximum of upto 10% on VA. Please refer to the table below.",
      },
    ],
    table: [
      ["Example", "1", "2", "3", "4"],
      ["Scheme Value", "1,10,000", "1,10,000", "1,10,000", "1,10,000"],
      ["EMA Value", "10,000", "10,000", "10,000", "10,000"],
      ["No. of EMAs to be paid", "11", "11", "11", "11"],
      ["No. of EMAs paid", "11", "8", "6", "4"],
      ["Total Amount paid", "1,10,000", "80,000", "60,000", "40,000"],
      ["Open Date", "01/04/2022", "01/04/2022", "01/04/2022", "01/04/2022"],
      ["Closure Date", "24/02/2023", "24/02/2023", "24/02/2023", "24/02/2023"],
      ["Days", "330", "330", "330", "330"],
      ["Benefit (VA)", "18%", "8%", "6%", "0%"],
      ["VA Benefit Maximum", "19,800", "6,400", "3,600", "0"],
    ],
  },
  {
    name: "PLAN 2",
    image: "/images/plan1.jpg", // replace with your image path
    heading: "Gold Ornaments",
    subHeading: "Grammage Accumulation",
    description:
      "A customer can select any Jewellery design of Her/His choice and place an order. Customer can pay the estimated order value in installments at regular monthly basis as per His/Her convenience. On or before the end of every month, as 11 Equated Monthly Advance (EMA).",
    terms: [
      {
        title: "A. VA WAIVER",
        content:
          "On maturity, “Gold Jewellery & Gold Coin” can be purchased in this scheme with a waiver of up to 18% VA (Value Addition) or on actuals, whichever is lower.",
      },
      {
        title: "B. NO. OF ADVANCE PAYMENTS",
        content: "11 Equated Monthly advances.",
      },
      {
        title: "C. TENURE",
        content: "330 days.",
      },
      {
        title: "D. MINIMUM MONTHLY ADVANCE",
        content:
          "Rs. 2000 per month and in multiples of Rs.1000 i.e., Rs.2000, Rs.3000",
      },
      {
        title: "E. GOLD RATE",
        content:
          "1. The EMA paid by the customer will be converted from ‘amount’ to ‘gold weight’. The prevailing Gold Rate for the day will be applicable at the time of EMA payment.\n2. When customers pay their EMA using Virtual Account, Cheque or any Online payment mode, prevailing gold rate at the time of payment realization in the company bank accounts, will be applicable.",
      },
      {
        title: "F. SWARNA SAKTHI ORDER REDEMPTION",
        content:
          "At the end of the 330 days (i.e., joining date + 329 days). Example: A customer joins Swarna Sakthi on 15th January → 329 days i.e., 10th December of the same year will be the redemption date.",
      },
      {
        title: "G. MATURITY",
        content:
          "Maturity is on completion of the 330 days and this tenure of 330 days cannot be extended under any circumstances.",
      },
      {
        title: "H. REFUND",
        content:
          "Refund is not permitted in this plan under any circumstances as EMA is converted to gold weight at the time of payment itself.",
      },
      {
        title: "I. GST & OTHER LEVIES",
        content:
          "GST & other Levies will be charged extra as per government norms.",
      },
      {
        title: "J. ELIGIBILITY",
        content:
          "Waiver of upto 18% VA will be given only if EMA payments are paid continuously without any default.",
      },
      {
        title: "K. AFTER-MATURITY BENEFITS",
        content:
          "In case of default, eligible benefit will be based on the number of EMAs (complete minimum period of 90 days). Customer will get benefit of 1% VA for each EMA paid month. Customer can avail maximum of upto 10% on VA. Please refer to the table below.",
      },
    ],
    table: [
      ["Example", "1", "2", "3", "4"],
      ["Scheme Value", "1,10,000", "1,10,000", "1,10,000", "1,10,000"],
      ["EMA Value", "10,000", "10,000", "10,000", "10,000"],
      ["No. of EMAs to be paid", "11", "11", "11", "11"],
      ["No. of EMAs paid", "11", "8", "6", "4"],
      ["Total Amount paid", "1,10,000", "80,000", "60,000", "40,000"],
      ["Open Date", "01/04/2022", "01/04/2022", "01/04/2022", "01/04/2022"],
      ["Closure Date", "24/02/2023", "24/02/2023", "24/02/2023", "24/02/2023"],
      ["Days", "330", "330", "330", "330"],
      ["Benefit (VA)", "18%", "8%", "6%", "0%"],
      ["VA Benefit Maximum", "19,800", "6,400", "3,600", "0"],
    ],
  },

  // You can define PLAN 2, PLAN 3, PLAN 4 similarly.
];

const GoldPlans = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const currentPlan = plans[selectedTab];

  return (
    <div>
      {/* Tabs */}
      <div className="sticky z-2 top-20 ease-in-out duration-300 plans-sticky-menu">
      <div className="flex py-2 bg-[#E0DACF] justify-center space-x-4 border-b border-gray-300 mb-8">
        {plans.map((plan, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(index)}
            className={`px-6 py-2 font-medium uppercase  ${
              selectedTab === index
                ? "bg-[#964A26] text-white"
                : "bg-transparent text-[#333]"
            }`}
          >
            {plan.name}
          </button>
        ))}
      </div>
      </div>

      <div className="container max-md:!p-0">
        {/* Content */}
        <div className="text-center text-2xl px-4 !text-[#964A26] uppercase  font-semibold mb-4">
          {currentPlan.heading}
        </div>

        <div className="bg-[#F2EDE4]">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 flex flex-col justify-center items-start p-4">
              <h3 className="text-lg text-[#a87c52] font-medium mb-6">
                {currentPlan.subHeading}
              </h3>
              <div className="text-gray-700">{currentPlan.description}</div>
            </div>

            <div className="w-full lg:w-3/4 max-lg:order-first">
              <Image
                src="/plan1-banner.webp"
                alt="plan image"
                width={1110}
                height={521}
                className="object-cover w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
      <div className="grid md:grid-cols-2 gap-4 py-10">
          {currentPlan.terms.map((term, idx) => (
            <div key={idx}>
              <div className="font-semibold text-lg text-[#2D2D2D]">{term.title}</div>
              <div className="text-sm whitespace-pre-line text-[#3B4443]">
                {term.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="!bg-[#F2EDE4]">
        <div className="container py-10">
        <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-center border border-black">
          <thead className="!bg-[#964A26]">
            <tr>
              {currentPlan.table[0].map((heading, idx) => (
                <th key={idx} className="border !text-white px-3 py-2 font-medium min-w-[200px]  border-black">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentPlan.table.slice(1).map((row, rowIdx) => (
              <tr key={rowIdx} className="bg-[#F2EDE4]">
                {row.map((cell, cellIdx) => (
                  <td key={cellIdx} className="px-3 py-2 !bg-[#F2EDE4] !border-r border-black" >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
      </div>
    </div>
  );
};

export default GoldPlans;
