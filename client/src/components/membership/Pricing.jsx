"use client";

import React, { useState } from "react";
import Container from "@/components/common/Container";
import { RiCheckFill } from "react-icons/ri";

const plans = [
  {
    id: 0,
    title: "Starter",
    price: "Free",
    duration: "/ forever",
    iconBg: "#C2C2C2",
    button: "Try for free",
    features: [
      "Components-driven system",
      "Sales-boosting landing pages",
      "Awesome Feather icons pack",
    ],
  },
  {
    id: 1,
    title: "Individual",
    price: "$24",
    duration: "/ month",
    iconBg: "#FDCB6E",
    button: "Regular license",
    features: [
      "Components-driven system",
      "Sales-boosting landing pages",
      "Awesome Feather icons pack",
      "Themed into 3 different styles",
      "Will help to learn Figma",
    ],
  },
  {
    id: 2,
    title: "Enterprise",
    price: "$48",
    duration: "/ month",
    iconBg: "#55EFC4",
    button: "Extended license",
    features: [
      "Components-driven system",
      "Sales-boosting landing pages",
      "Awesome Feather icons pack",
      "Themed into 3 different styles",
    ],
  },
];

const Pricing = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="py-16 lg:py-24">
      <Container>
        <h1 className="text-center text-4xl md:text-5xl xl:text-[64px] font-extrabold text-bgColor">
          Affordable Pricing
        </h1>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const active = activeTab === plan.id;
            return (
              <div
                key={plan.id}
                onClick={() => setActiveTab(plan.id)}
                className={`h-full rounded-2xl border cursor-pointer transition-all duration-300
                ${
                  active
                    ? "shadow-2xl scale-105 border-transparent"
                    : "border-gray-200 hover:shadow-xl hover:-translate-y-2"
                }`}
              >
                <div className="flex h-full flex-col p-8">
                  <p className="text-bgColor font-bold text-lg">{plan.title}</p>
                  <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
                    {plan.price}
                    <span className="block mt-2 text-xs uppercase tracking-[2px]">
                      {plan.duration}
                    </span>
                  </h2>
                  <ul className="mt-10 space-y-5">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-4 text-base lg:text-lg"
                      >
                        <span
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                          style={{ backgroundColor: plan.iconBg }}
                        >
                          <RiCheckFill />
                        </span>

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-10">
                    <button
                      className={`w-full rounded-xl border py-4 text-lg font-bold transition-all duration-300 ${
                        active
                          ? "bg-bgColor text-white border-bgColor"
                          : "border-bgColor text-bgColor hover:bg-bgColor hover:text-white"
                      }`}
                    >
                      {plan.button}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
