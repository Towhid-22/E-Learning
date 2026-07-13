import React from "react";
import Container from "../../common/Container";
import { RiContactsBook3Line } from "react-icons/ri";
import { LuCalendarDays } from "react-icons/lu";
import { HiUserGroup } from "react-icons/hi";

const cards = [
  {
    title: "Online Billing, Invoicing, & Contracts",
    description:
      "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
    icon: RiContactsBook3Line,
    bg: "bg-[#5B72EE]",
  },
  {
    title: "Easy Scheduling & Attendance Tracking",
    description:
      "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
    icon: LuCalendarDays,
    bg: "bg-otherTextColor",
  },
  {
    title: "Customer Tracking",
    description:
      "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization",
    icon: HiUserGroup,
    bg: "bg-[#29B9E7]",
  },
];

const AllInOne = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <Container>
        <h3 className="text-center font-bold text-3xl md:text-4xl leading-snug text-textSecondaryColor">
          All-In-One{" "}
          <span className="text-otherTextColor">Cloud Software.</span>
        </h3>

        <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="relative rounded-[20px] bg-white px-8 py-12 shadow-[0_10px_20px_rgba(0,0,0,0.10)]"
              >
                <button
                  className={`${card.bg} absolute left-1/2 top-0 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white`}
                >
                  <Icon size={35} />
                </button>

                <h4 className="mt-10 text-center text-2xl font-medium text-textSecondaryColor">
                  {card.title}
                </h4>

                <p className="mt-6 text-center text-base md:text-lg leading-8 text-textPrimaryColor">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default AllInOne;
